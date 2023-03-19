import React from 'react';
import {View, TouchableOpacity, Text, Animated} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {connect} from 'react-redux';
import PlayerAction from '../../redux/actions';
import {QueueInitialTracksService, SetupService} from './../../services';
import TrackPlayer, {usePlaybackState} from 'react-native-track-player';

const Player: React.FC = (props: any) => {
  const state = usePlaybackState();
  const opacity = React.useRef(new Animated.Value(0)).current;
  const {play, pause} = PlayerAction(props);
  const {title: nowTitle, artist: nowArtist, isPlaying} = props;
  const [isPlayerReady, setIsPlayerReady] = React.useState<boolean>(false);

  React.useEffect(() => {
    let unmounted = false;
    (async () => {
      const isSetup = await SetupService();
      if (unmounted) {
        return;
      }
      setIsPlayerReady(isSetup);
      const queue = await TrackPlayer.getQueue();
      if (unmounted) {
        return;
      }
      if (isSetup && queue.length <= 0) {
        queTrack();
      }
    })();
    return () => {
      unmounted = true;
    };
  }, []);

  const queTrack = async () => {
    await QueueInitialTracksService('http://192.168.159.65:3000/stream');
    TrackPlayer.play();
  };

  const getRadioTrack = () => {
    fetch('http://192.168.159.65:3000/api', {
      method: 'GET',
    })
      .then(res => {
        return res.json();
      })
      .then(res => {
        const {artist, title} = res;
        play(artist, title, '');
      })
      .catch(error => {
        console.log('error');
      });
  };

  React.useEffect(() => {
    if (isPlaying) {
      Animated.timing(opacity, {
        toValue: 1,
        delay: 1500,
        duration: 2500,
        useNativeDriver: true,
      }).start();
    }
  }, [isPlaying, opacity]);

  React.useEffect(() => {
    getRadioTrack;
    if (isPlayerReady) {
      getRadioTrack();
      TrackPlayer;
    }
  }, [isPlayerReady, TrackPlayer]);

  React.useEffect(() => {
    console.log(state);
    if (state === 'idle') {
      getRadioTrack();
      queTrack();
    }
  }, [state]);

  return (
    <Animated.View
      style={[
        styles.wrapper,
        {
          opacity,
        },
      ]}>
      <View style={styles.container}>
        <View style={styles.detailsContainer}>
          <View>
            <TouchableOpacity>
              <Text style={styles.track}>{nowTitle.substring(0, 20)}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.artist}>{nowArtist.substring(0, 20)}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          {state === 'ready' || state === 'pause' || state === 'idle' ? (
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                TrackPlayer.play();
              }}>
              <Icon name="play" size={30} color="white" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                TrackPlayer.pause();
              }}>
              <Icon name="pause" size={30} color="white" />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </Animated.View>
  );
};

const mapStateToProps = (state: any) => {
  return {
    isPlaying: state.Player.isPlaying,
    artist: state.Player.artist,
    title: state.Player.title,
  };
};

export default connect(mapStateToProps)(Player);

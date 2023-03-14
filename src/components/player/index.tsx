import React from 'react';
import {View, TouchableOpacity, Text, Animated} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {connect} from 'react-redux';
import PlayerAction from '../../redux/actions';

const Player: React.FC = (props: any) => {
  const opacity = React.useRef(new Animated.Value(0)).current;
  const {play, pause} = PlayerAction(props);
  const {title, artist, isPlaying} = props;

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
              <Text style={styles.track}>{title.substring(0, 20)}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.artist}>{artist.substring(0, 20)}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          {isPlaying ? (
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                pause();
              }}>
              <Icon name="pause" size={30} color="white" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                play('', '');
              }}>
              <Icon name="play" size={30} color="white" />
            </TouchableOpacity>
          )}
          <TouchableOpacity>
            <Icon
              style={styles.button}
              name="fast-forward"
              size={30}
              color="white"
            />
          </TouchableOpacity>
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

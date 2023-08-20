import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import TrackPlayer, {State} from 'react-native-track-player';
import {useProgress} from 'react-native-track-player';

const Player = ({
  image = null,
  artist = null,
  title = null,
  state,
}: {
  image: string | null;
  artist: string | null;
  title: string | null;
  state: State;
}) => {
  const offset = useSharedValue(-100);
  const [slider, setSlider] = useState<number>(0);
  const {position, buffered, duration} = useProgress();

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{translateY: offset.value}],
  }));

  useEffect(() => {
    setSlider((position / duration) * 100);
  }, [position, buffered, duration]);

  return (
    <Animated.View style={styles.container}>
      <View
        style={[
          styles.slider,
          {
            width: `${slider}%`,
          },
        ]}
      />
      <View style={styles.blurContainer}>
        <View style={styles.detailsContainer}>
          <Image source={{uri: image}} style={styles.imageContainer} />
          <View style={styles.textContainer}>
            <Text numberOfLines={1} style={styles.artistText}>
              {artist}
            </Text>
            <Text numberOfLines={1} style={styles.titleText}>
              {title}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            state === State.Playing ? TrackPlayer.pause() : TrackPlayer.play()
          }>
          <Icon
            name={state === State.Playing ? 'pause' : 'play'}
            size={25}
            color="#E0E0E0"
          />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

export default Player;

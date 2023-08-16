import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {BlurView} from '@react-native-community/blur';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const Player = ({
  image = null,
  artist = null,
  title = null,
}: {
  image?: string | null;
  artist?: string | null;
  title?: string | null;
}) => {
  const offset = useSharedValue(-100);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{translateY: offset.value}],
  }));

  useEffect(() => {
    if (artist && title) {
      //offset.value = withSpring(
      //  withTiming(-offset.value, {duration: 1300}),
      //  0,
      //  true,
      //);
    }
  }, [artist, title, image, offset]);

  return (
    <Animated.View style={styles.container}>
      <View style={styles.blurContainer}>
        <View style={styles.detailsContainer}>
          <Image source={{uri: image}} style={styles.imageContainer} />
          <View style={styles.textContainer}>
            <Text style={styles.artistText}>{artist}</Text>
            <Text style={styles.titleText}>{title}</Text>
          </View>
        </View>
      </View>
    </Animated.View>
  );
};

export default Player;

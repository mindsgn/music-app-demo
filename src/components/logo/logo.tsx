import React from 'react';
import {View} from 'react-native';
import styles from './style';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
} from 'react-native-reanimated';

const Logo = ({loading}: {loading: boolean}) => {
  const offset = useSharedValue(10);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{translateY: offset.value}],
  }));

  React.useEffect(() => {
    offset.value = withRepeat(
      withTiming(-offset.value, {duration: 1300}),
      0,
      true,
    );
  }, [offset]);

  return (
    <View
      style={[
        styles.container,
        {
          display: loading ? 'flex' : 'none',
        },
      ]}>
      <Animated.Text style={[styles.text, animatedStyles]}>
        MIXØ.XYZ
      </Animated.Text>
    </View>
  );
};

export default Logo;

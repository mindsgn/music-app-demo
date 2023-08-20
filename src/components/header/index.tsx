import React from 'react';
import {View} from 'react-native';
import styles from './style';
import {BlurView} from '@react-native-community/blur';

const Header = () => {
  return (
    <View style={styles.container}>
      <BlurView
        blurType="xlight"
        blurAmount={10}
        overlayColor={'rgba(0,0,0,0)'}
        style={styles.blurContainer}
      />
    </View>
  );
};

export default Header;

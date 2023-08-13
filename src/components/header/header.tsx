import React from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome5';
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

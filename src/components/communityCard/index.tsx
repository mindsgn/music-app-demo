import React from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Community = () => {
  return (
    <ImageBackground
      style={styles.Imagecontainer}
      imageStyle={{borderRadius: 15}}
      source={require('../../assets/background.png')}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Join the MIXØ Radio</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Icon name={'play'} size={25} color="#E0E0E0" />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Community;

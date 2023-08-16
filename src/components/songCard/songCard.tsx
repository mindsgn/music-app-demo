import React from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';

const SongCard = ({
  artist,
  title,
  art = '',
  play,
}: {
  artist?: string;
  title?: string;
  art?: string;
  play: () => void;
}) => {
  return (
    <ImageBackground
      style={styles.imageContainer}
      imageStyle={{borderRadius: 15}}
      source={{uri: art}}
      resizeMode="cover">
      <LinearGradient
        colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.5)', 'rgba(0, 0, 0, 1)']}
        style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={play}>
          <Icon name="play" size={25} color="black" />
        </TouchableOpacity>
      </LinearGradient>
      <View style={styles.details}>
        <View>
          <View
            style={{
              maxWidth: 250,
            }}>
            <Text numberOfLines={1} style={styles.textTitle}>
              {title}
            </Text>
          </View>
          <View
            style={{
              maxWidth: 100,
            }}>
            <Text numberOfLines={1} style={styles.textArtist}>
              {artist}
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default SongCard;

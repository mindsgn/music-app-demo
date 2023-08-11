import React from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome5';

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
      style={styles.container}
      source={{uri: art}}
      resizeMode="cover">
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
        <View>
          <TouchableOpacity style={styles.button} onPress={play}>
            <Icon name="play" size={10} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default SongCard;

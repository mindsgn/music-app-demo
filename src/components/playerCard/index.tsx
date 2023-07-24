import React from 'react';
import {Text, View, TouchableOpacity, ImageBackground} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome5';

const PlayerCard = ({
  artist = '',
  title = '',
  art = '',
  isPlaying = false,
  play,
  pause,
}: {
  artist?: string;
  title?: string;
  art?: string;
  isPlaying?: boolean;
  play: () => void;
  pause: () => void;
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerBackground}>
        <View style={styles.details}>
          <ImageBackground style={styles.image} source={{uri: `${art}`}} />
          <View style={styles.text}>
            <View>
              <Text style={styles.textTitle}>{title}</Text>
            </View>
            <View>
              <Text style={styles.textArtist}>{artist}</Text>
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              isPlaying ? play() : pause();
            }}>
            {isPlaying ? (
              <Icon name="pause" size={10} color="black" />
            ) : (
              <Icon name="play" size={10} color="black" />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PlayerCard;

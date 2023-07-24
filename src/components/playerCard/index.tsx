import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity, ImageBackground} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Sound from 'react-native-sound';
Sound.setCategory('Playback');

const PlayerCard = ({
  artist = '',
  title = '',
  art = '',
  link,
  isPlaying,
  play,
}: {
  artist?: string;
  title?: string;
  art?: string;
  isPlaying?: boolean;
  link?: string;
  play: () => void;
}) => {
  const [music, setMusic] = useState<any | null>(null);

  const pause = () => {
    music.pause();
  };

  useEffect(() => {
    if (link) {
      if (music) {
        music.stop();
        music.release();
      }

      const sound = new Sound(link, Sound.MAIN_BUNDLE, error => {
        if (error) {
          console.log('failed to load the sound', error);
          return;
        }
        setMusic(sound);
      });
    }
  }, [link]);

  useEffect(() => {
    if (music) {
      music.play();
    }
  }, [music]);

  return (
    <View style={styles.container}>
      <View style={styles.containerBackground}>
        <View style={styles.details}>
          <ImageBackground style={styles.image} source={{uri: `${art}`}} />
          <View style={styles.text}>
            <View
              style={{
                maxWidth: 200,
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
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              pause();
            }}>
            <Icon name="pause" size={10} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PlayerCard;

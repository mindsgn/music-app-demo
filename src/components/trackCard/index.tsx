import React from 'react';
import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import styles from './style';

const TrackCard = ({
  artist,
  title,
  link,
  background,
}: {
  artist: string;
  title: string;
  link: string;
  background: string;
}) => {
  return (
    <View style={styles.container}>
      <View />
      <View>
        <View>
          <Text style={styles.text}>{artist}</Text>
          <Text style={styles.text}>{title}</Text>
        </View>

        <TouchableOpacity>
          <Text>Play</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TrackCard;

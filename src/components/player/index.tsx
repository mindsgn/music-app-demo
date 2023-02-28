import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Player: React.FC = () => {
  const [isPlaying, setIsPlaying] = React.useState<boolean>(false);

  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <View>
          <TouchableOpacity>
            <Text style={styles.track}>{'Track'}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.artist}>{'Artist'}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        {isPlaying ? (
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setIsPlaying(false);
            }}>
            <Icon name="pause" size={30} color="white" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setIsPlaying(true);
            }}>
            <Icon name="play" size={30} color="white" />
          </TouchableOpacity>
        )}
        <TouchableOpacity>
          <Icon
            style={styles.button}
            name="fast-forward"
            size={30}
            color="white"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Player;

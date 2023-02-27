import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './style';

const Player: React.FC = () => {
  const [isPlaying, setIsPlaying] = React.useState<boolean>(false);

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity>
          <Text style={styles.artist}>{'like'}</Text>
        </TouchableOpacity>
      </View>
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
            onPress={() => {
              setIsPlaying(false);
            }}>
            <Text style={styles.artist}>{'stop'}</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setIsPlaying(true);
            }}>
            <Text style={styles.artist}>{'play'}</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity>
          <Text style={styles.artist}>{'next'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Player;

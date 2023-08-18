import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './style';

const Error = ({error}: {error: boolean}) => {
  return (
    <View
      style={[
        styles.container,
        {
          display: error ? 'flex' : 'none',
        },
      ]}>
      <Text style={styles.text}>Error</Text>
    </View>
  );
};

export default Error;

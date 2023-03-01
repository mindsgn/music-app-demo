import React from 'react';
import {View} from 'react-native';
import styles from './style';
import Title from '../title';

const HorizontalScroll: React.FC = ({text}: {text: string}) => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Title text={text} />
      </View>
      <View style={styles.container} />
    </View>
  );
};

export default HorizontalScroll;

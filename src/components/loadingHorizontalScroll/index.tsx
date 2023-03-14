import React from 'react';
import {View, TouchableOpacity, ScrollView} from 'react-native';
import styles from './style';
import Title from '../title';

const LoadingHorizontalScroll = ({
  text,
  data = [],
}: {
  text: string;
  data: any;
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Title text={text} />
      </View>
      <ScrollView horizontal={true} style={styles.scrollContainer}>
        {data.map(() => {
          return (
            <TouchableOpacity style={styles.card}>
              <View style={styles.cardImage} />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default LoadingHorizontalScroll;

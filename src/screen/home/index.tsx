import React from 'react';
import {View} from 'react-native';
import styles from './style';
import {RadioCard, HorizontalScroll} from '../../components';

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <RadioCard />
      <HorizontalScroll text="Artists" />
      <HorizontalScroll text="Tracks" />
    </View>
  );
};

export default Home;

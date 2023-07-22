import React from 'react';
import {View} from 'react-native';
import styles from './style';
import {connect} from 'react-redux';
import RadioCard from '../../components/radioCard';
import {TrackList} from '../../components';

const Home = () => {
  return (
    <View style={styles.container}>
      <RadioCard />
      <TrackList />
    </View>
  );
};

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps)(Home);

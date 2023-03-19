import React from 'react';
import {View} from 'react-native';
import styles from './style';
import {connect} from 'react-redux';

const Home = () => {
  return <View style={styles.container} />;
};

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps)(Home);

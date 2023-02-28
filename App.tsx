import React from 'react';
import {SafeAreaView} from 'react-native';
import Player from './src/components';

const App = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'black',
      }}>
      <Player />
    </SafeAreaView>
  );
};

export default App;

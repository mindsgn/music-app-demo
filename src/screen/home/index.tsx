import React from 'react';
import {View} from 'react-native';
import styles from './style';
import {connect} from 'react-redux';
import {
  RadioCard,
  HorizontalScroll,
  LoadingHorizontalScroll,
} from '../../components';

const Home = (props: any) => {
  const [trending, setTrending] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  const getTrending = () => {
    const headers = {
      Accept: 'application/json',
    };

    fetch('https://audius-disco.dfw-x02.us.supercache.org/v1/tracks/trending', {
      method: 'GET',

      headers: headers,
    })
      .then(res => {
        setIsLoading(false);
        return res.json();
      })
      .catch(error => {
        console.log('error', error);
      })
      .then(data => {
        setTrending(data.data);
      });
  };

  React.useEffect(() => {
    getTrending();
  }, []);

  return (
    <View style={styles.container}>
      <RadioCard />
      {isLoading ? (
        <LoadingHorizontalScroll text="Trending" data={[{}, {}]} />
      ) : (
        <HorizontalScroll text="Trending" data={trending} props={props} />
      )}
    </View>
  );
};

const mapStateToProps = (state: any) => {
  return {
    isPlaying: state.Player.isPlaying,
    artist: state.Player.artist,
    title: state.Player.title,
  };
};

export default connect(mapStateToProps)(Home);

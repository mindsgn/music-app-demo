import React from 'react';
import {View} from 'react-native';
import styles from './style';
import {connect} from 'react-redux';
import {TrackList, PlayerCard} from '../../components';
import PlayerActions from '../../redux/actions/player.action';

const Home = (props: any) => {
  const {play, pause} = PlayerActions(props);
  const {artist, title, art, isPlaying} = props;

  return (
    <View style={styles.container}>
      <TrackList />
      <PlayerCard
        artist={artist}
        title={title}
        art={art}
        isPlaying={isPlaying}
        play={() => play()}
        pause={() => pause()}
      />
    </View>
  );
};

const mapStateToProps = (state: any) => {
  return {
    artist: state.playerReducer.artist,
    title: state.playerReducer.title,
    art: state.playerReducer.art,
    isPlaying: state.playerReducer.isPlaying,
  };
};

export default connect(mapStateToProps)(Home);

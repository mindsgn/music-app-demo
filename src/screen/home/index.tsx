import React from 'react';
import {View} from 'react-native';
import styles from './style';
import {connect} from 'react-redux';
import {TrackList, PlayerCard} from '../../components';
import PlayerActions from '../../redux/actions/player.action';

const Home = (props: any) => {
  const {play} = PlayerActions(props);
  const {artist, title, art, isPlaying, link} = props;

  return (
    <View style={styles.container}>
      <TrackList />
      <PlayerCard
        artist={artist}
        title={title}
        art={art}
        link={link}
        isPlaying={isPlaying}
        play={() => play()}
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
    link: state.playerReducer.link,
  };
};

export default connect(mapStateToProps)(Home);

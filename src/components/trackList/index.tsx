import React, {useEffect, useState} from 'react';
import {View, VirtualizedList} from 'react-native';
import TrackCard from '../trackCard';
import styles from './style';
import RadioCard from '../radioCard';
import {connect} from 'react-redux';
import PlayerAction from '../../redux/actions/player.action';

const TrackList = (props: any) => {
  const {play} = PlayerAction(props);
  const [tracks, setTracks] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const getTracks = async () => {
    fetch('https://plankton-app-5voay.ondigitalocean.app/track/all?limit=100')
      .then(response => {
        return response.json();
      })
      .then(response => {
        const {data} = response;
        setTracks(data);
        setLoading(false);
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  const getItem = (data: any, index: any) => {
    return data[index];
  };

  const getItemCount = () => tracks.length;

  useEffect(() => {
    getTracks();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? null : (
        <VirtualizedList
          ListHeaderComponent={<RadioCard />}
          ListFooterComponent={<></>}
          data={tracks}
          initialNumToRender={10}
          keyExtractor={item => item.id}
          style={styles.listContainer}
          getItemCount={getItemCount}
          getItem={getItem}
          renderItem={({item}: {item: any}) => (
            <TrackCard
              art={item.art}
              title={item.title}
              artist={item.name}
              play={() => {
                play(item.name, item.title, item.link, item.art);
              }}
            />
          )}
        />
      )}
    </View>
  );
};

const mapStateToProps = (state: any) => {
  return {
    isPlaying: state.playerReducer.isPlaying,
    artist: state.playerReducer.artist,
    title: state.playerReducer.title,
  };
};

export default connect(mapStateToProps)(TrackList);

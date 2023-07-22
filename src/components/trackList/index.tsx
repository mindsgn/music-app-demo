import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import TrackCard from '../trackCard';
import styles from './style';

const TrackList = () => {
  const [tracks, setTracks] = useState<any[]>([{}, {}, {}]);
  const getTracks = async () => {
    fetch('https://plankton-app-5voay.ondigitalocean.app/track/all?limit=100')
      .then(response => {
        return response.json();
      })
      .then(response => {
        const {data} = response;
        setTracks(data);
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getTracks();
  });

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.listContainer}
        data={tracks}
        renderItem={({item}: {item: any}) => (
          <TrackCard
            key={item._id}
            background={item.background}
            title={item.title}
            artist={item.artist}
            link={item.link}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default TrackList;

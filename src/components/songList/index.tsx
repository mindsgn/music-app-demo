import React from 'react';
import {View, FlatList} from 'react-native';
import SongCard from '../songCard';
import styles from './style';
import {State} from 'react-native-track-player';
import {CommunityCard} from '..';

const SongList = ({
  data,
  onEndReach,
  setCurrent,
}: {
  data: any[];
  onEndReach: any;
  setCurrent: any;
}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        onEndReached={onEndReach}
        onEndReachedThreshold={90}
        renderItem={({item, index}: {item: any; index: number}) => {
          return (
            <SongCard
              key={`${index}-${item.id}`}
              art={item.artwork}
              title={item.title}
              artist={item.artist}
              play={() =>
                setCurrent({
                  id: item.id,
                  image: item.artwork,
                  title: item.title,
                  state: State.None,
                  artist: item.artist,
                  link: item.link,
                })
              }
            />
          );
        }}
      />
    </View>
  );
};

export default SongList;

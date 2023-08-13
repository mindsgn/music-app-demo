import React from 'react';
import {View, VirtualizedList, FlatList} from 'react-native';
import SongCard from '../songCard/songCard';
import styles from './style';

const SongList = ({data, onEndReach}: {data: any[]; onEndReach: any}) => {
  const getItem = (items: any, index: any) => {
    return items[index];
  };

  const getItemCount = () => data.length;

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        onEndReached={onEndReach}
        onEndReachedThreshold={50}
        renderItem={({item, index}: {item: any; index: number}) => {
          return (
            <SongCard
              key={index}
              art={item.artwork}
              title={item.title}
              artist={item.artist}
              play={() => {}}
            />
          );
        }}
      />
    </View>
  );
};

export default SongList;

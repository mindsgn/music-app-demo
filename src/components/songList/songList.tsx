import React from 'react';
import {View, VirtualizedList} from 'react-native';
import SongCard from '../songCard/songCard';
import styles from './style';

const SongList = ({
  data,
  onEndReach,
  extraData,
}: {
  data: any[];
  onEndReach: any;
  extraData: any[];
}) => {
  const getItem = (items: any, index: any) => {
    return items[index];
  };

  const getItemCount = () => data.length;

  return (
    <View style={styles.container}>
      <VirtualizedList
        data={data}
        initialNumToRender={4}
        keyExtractor={item => item._id}
        style={styles.listContainer}
        getItemCount={getItemCount}
        getItem={getItem}
        onEndReached={() => onEndReach()}
        onEndReachedThreshold={40}
        extraData={extraData}
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

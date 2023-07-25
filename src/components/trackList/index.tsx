import React, {useEffect, useState} from 'react';
import {View, VirtualizedList} from 'react-native';
import TrackCard from '../trackCard';
import styles from './style';
import RadioCard from '../radioCard';
import {connect} from 'react-redux';
import {PlayerAction, APIAction} from '../../redux/actions';

const TrackList = (props: any) => {
  const {data} = props;
  const {playNew} = PlayerAction(props);
  const {getRandom} = APIAction(props);

  const getItem = (data: any, index: any) => {
    return data[index];
  };

  const getItemCount = () => data.length;

  useEffect(() => {
    getRandom();
  }, []);

  return (
    <View style={styles.container}>
      <VirtualizedList
        ListHeaderComponent={<RadioCard />}
        ListFooterComponent={<></>}
        data={data}
        initialNumToRender={10}
        keyExtractor={item => item._id}
        style={styles.listContainer}
        getItemCount={getItemCount}
        getItem={getItem}
        renderItem={({item}: {item: any}) => (
          <TrackCard
            art={item.art}
            title={item.title}
            artist={item.name}
            play={() => {
              playNew(item.name, item.title, item.link, item.art);
            }}
          />
        )}
      />
    </View>
  );
};

const mapStateToProps = (state: any) => {
  return {
    data: state.APIReducer.data,
  };
};

export default connect(mapStateToProps)(TrackList);

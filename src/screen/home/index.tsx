import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import styles from './style';
import {trpc} from '../../utils/trpc';
import {Logo, Error, SongList} from '../../components';

const Home = () => {
  const [songData, setSongData] = useState<any[]>([]);
  const [extraData, setExtraData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [hasError, setError] = useState<boolean>(false);

  const getDatabase = async () => {
    try {
      const songResponse = await trpc.getSongs.query();
      const searchResponse = await trpc.searchSongs.query();
      console.log(searchResponse);
      const {data} = songResponse;
      if (data.length === 0 && songData.length === 0) {
        setError(true);
      } else {
        const uniqueIdsData1 = new Set(
          songData.map(item => JSON.stringify(item)),
        );

        const newSongData = data.filter(
          item => !uniqueIdsData1.has(JSON.stringify(item)),
        );

        if (songData.length <= 0) {
          setSongData(prevSongData => [...prevSongData, ...newSongData]);
        } else {
          setExtraData(prevSongData => [...prevSongData, ...newSongData]);
        }
      }
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    getDatabase();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <SongList
        data={songData}
        extraData={extraData}
        onEndReach={() => {
          getDatabase();
        }}
      />
      <Logo loading={loading} />
      <Error error={hasError} />
    </View>
  );
};

export default Home;

import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import styles from './style';
import {trpc} from '../../utils/trpc';
import {Logo, Error, SongList, Player, Header} from '../../components';

const Home = () => {
  const [songData, setSongData] = useState<any[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [hasError, setError] = useState<boolean>(false);

  const getDatabase = async () => {
    try {
      const songResponse = await trpc.getSongs.query({
        limit: 10,
        page,
      });
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

        setSongData(prevSongData => [...prevSongData, ...newSongData]);
      }
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    getDatabase();
  }, [page]);

  return (
    <View style={styles.container}>
      <Player />
      <Header />
      <SongList
        data={songData}
        onEndReach={() => {
          setPage(page + 1);
        }}
      />
      <Logo loading={loading} />
      <Error error={hasError} />
    </View>
  );
};

export default Home;

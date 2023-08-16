import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import styles from './style';
import {trpc} from '../../utils/trpc';
import {Logo, Error, SongList, Player, Header} from '../../components';

interface CurrentProps {
  artist: string;
  title: string;
  image: string;
}

const Home = () => {
  const [songData, setSongData] = useState<any[]>([]);
  const [current, setCurrent] = useState<CurrentProps | null>(null);
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
      <Header />
      <Player
        artist={current?.artist}
        title={current?.title}
        image={current?.image}
      />
      <SongList
        data={songData}
        onEndReach={() => {
          setPage(page + 1);
        }}
        setCurrent={setCurrent}
      />
      <Logo loading={loading} />
      <Error error={hasError} />
    </View>
  );
};

export default Home;

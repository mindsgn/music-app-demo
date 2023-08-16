import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import styles from './style';
import {trpc} from '../../utils/trpc';
import {Logo, Error, SongList, Player, Header} from '../../components';
import TrackPlayer, {State} from 'react-native-track-player';

interface CurrentProps {
  artist: string;
  title: string;
  image: string;
  link: string;
}

const Home = () => {
  const [songData, setSongData] = useState<any[]>([]);
  const [current, setCurrent] = useState<CurrentProps | null>(null);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [hasError, setError] = useState<boolean>(false);

  const getDatabase = async () => {
    try {
      await TrackPlayer.setupPlayer();
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
      console.log(error);
      setLoading(false);
      setError(true);
    }
  };

  const Play = async () => {
    try {
      if (current) {
        const state = await TrackPlayer.getState();
        if (state === State.Playing) {
          TrackPlayer.reset();
        }
        await TrackPlayer.add({
          id: 'trackId',
          url: `${current.link}`,
          title: `${current.title}`,
          artist: `${current.artist}`,
          artwork: `${current.image}`,
        });

        await TrackPlayer.play();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDatabase();
    async () => {};
  }, []);

  useEffect(() => {
    if (current && current.link) {
      Play();
    }
  }, [current]);

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

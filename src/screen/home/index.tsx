import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import styles from './style';
import {trpc} from '../../utils/trpc';
import {Logo, Error, SongList, Player} from '../../components';
import TrackPlayer, {
  State,
  AppKilledPlaybackBehavior,
  useTrackPlayerEvents,
  Event,
} from 'react-native-track-player';

interface CurrentProps {
  id: string | null;
  state: State;
  artist: string | null;
  title: string | null;
  image: string | null;
  link: string | null;
}

const events = [Event.PlaybackState, Event.PlaybackError];

const Home = () => {
  const [songData, setSongData] = useState<any[]>([]);
  const [current, setCurrent] = useState<CurrentProps>({
    id: null,
    state: State.None,
    artist: null,
    title: null,
    image: null,
    link: null,
  });
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [hasError, setError] = useState<boolean>(false);

  const getDatabase = async () => {
    try {
      TrackPlayer.updateOptions({
        android: {
          appKilledPlaybackBehavior: AppKilledPlaybackBehavior.ContinuePlayback,
        },
      });
      const songResponse = await trpc.getSongs.query({
        limit: 10,
        page,
      });
      const {data} = songResponse;
      if (data.length === 0 && songData.length === 0) {
        // setError(true);
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
      // console.log(error);
      setLoading(false);
      // setError(true);
    }
  };

  const TrackPlayerSetup = async () => {
    await TrackPlayer.setupPlayer();
  };

  const StopAndPlay = async () => {
    try {
      if (current) {
        const state = await TrackPlayer.getState();
        if (state === State.Playing || state === State.Paused) {
          TrackPlayer.pause();
          TrackPlayer.reset();
        }
        await TrackPlayer.add({
          id: `${current.id}`,
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

  useTrackPlayerEvents(events, event => {
    if (event.type === Event.PlaybackError) {
      console.warn('An error occured while playing the current track.');
    }
    if (event.type === Event.PlaybackState) {
      if (event.state === State.Playing) {
        setCurrent({...current, state: State.Playing});
      }
      if (event.state === State.Connecting) {
        setCurrent({...current, state: State.Connecting});
      }

      if (event.state === State.Paused) {
        setCurrent({...current, state: State.Paused});
      }
    }
  });

  useEffect(() => {
    getDatabase();
  }, [page]);

  useEffect(() => {
    if (current.artist && current.link && current.title) {
      StopAndPlay();
    }
  }, [current.artist, current.link, current.title]);

  useEffect(() => {
    TrackPlayerSetup();
  }, []);

  return (
    <View style={styles.container}>
      <Player
        artist={current.artist}
        title={current.title}
        image={current.image}
        state={current.state}
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

import TrackPlayer from 'react-native-track-player';

export const QueueInitialTracksService = async (
  title: any,
  artist: any,
  url: any,
): Promise<void> => {
  await TrackPlayer.add([
    {
      url: url,
      title: title,
      artist: artist,
      artwork: '',
    },
  ]);
};

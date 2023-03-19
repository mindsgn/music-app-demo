import TrackPlayer from 'react-native-track-player';

export const QueueInitialTracksService = async (url: any): Promise<void> => {
  await TrackPlayer.add([
    {
      url: url,
    },
  ]);
};

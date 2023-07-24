import {PLAY, PAUSE, PLAY_NEW} from '../../constants';
import Sound from 'react-native-sound';
Sound.setCategory('Playback');

const PlayerAction = (props: any) => {
  const {dispatch} = props;

  const play = () => {
    try {
      dispatch({
        type: PLAY,
      });
    } catch (error) {}
  };

  const playNew = (
    artist?: string,
    title?: string,
    link?: string,
    art?: string,
  ) => {
    try {
      dispatch({
        type: PLAY_NEW,
        artist,
        title,
        link,
        art,
        isPlaying: true,
      });
    } catch (error) {}
  };

  const pause = () => {
    try {
      dispatch({
        type: PAUSE,
        isPlaying: false,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const next = () => {};

  return {
    pause,
    play,
    next,
    playNew,
  };
};

export default PlayerAction;

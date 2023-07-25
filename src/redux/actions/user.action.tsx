import {PLAY, PAUSE, PLAY_NEW, ERROR} from '../../constants';
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
    } catch (error) {
      dispatch({
        type: ERROR,
      });
    }
  };

  const pause = () => {
    try {
      dispatch({
        type: PAUSE,
        isPlaying: false,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
      });
    }
  };

  return {
    pause,
    play,
    playNew,
  };
};

export default PlayerAction;

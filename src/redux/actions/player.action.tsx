import {PLAY, PAUSE} from '../../constants';
import Sound from 'react-native-sound';
Sound.setCategory('Playback');

const PlayerAction = (props: any) => {
  const {dispatch} = props;

  const play = (
    artist?: string,
    title?: string,
    link?: string,
    art?: string,
  ) => {
    try {
      console.log(art);

      dispatch({
        type: PLAY,
        artist,
        title,
        link,
        art,
      });
    } catch (error) {}
  };

  const pause = () => {
    try {
      dispatch({
        type: PAUSE,
        isPlaying: false,
      });
    } catch (error) {}
  };

  const next = () => {};

  return {
    pause,
    play,
    next,
  };
};

export default PlayerAction;

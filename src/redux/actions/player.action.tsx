import {PLAY, PAUSE} from '../../constants';
const PlayerAction = (props: any) => {
  const {dispatch} = props;

  const pause = () => {
    dispatch({
      type: PAUSE,
      isPlaying: false,
    });
  };

  const play = () => {
    dispatch({
      type: PLAY,
      isPlaying: true,
      artist: 'krule',
      title: 'blue',
    });
  };

  const next = () => {};

  return {
    pause,
    play,
    next,
  };
};

export default PlayerAction;

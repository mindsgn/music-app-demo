import {PLAY} from './../../constants';

interface PlayerInterface {
  isPlaying: boolean;
  artist: null | string;
  title: null | string;
  link: null | string;
  art: null | string;
  playlist: null | any[];
  showPlayer: boolean;
}

const initialState: PlayerInterface = {
  isPlaying: false,
  artist: null,
  title: null,
  link: null,
  art: null,
  playlist: null,
  showPlayer: false,
};

const Player = (state = initialState, action: any) => {
  switch (action.type) {
    case PLAY:
      return {
        ...state,
        artist: action.artist,
        title: action.title,
        art: action.art,
        link: action.link,
        isPlaying: true,
      };
    default:
      return state;
  }
};

export default Player;

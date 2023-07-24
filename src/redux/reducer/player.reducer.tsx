import {PLAY, PLAY_NEW, STOP, PAUSE} from './../../constants';

interface PlayerInterface {
  isPlaying: boolean;
  artist: null | string;
  title: null | string;
  link: null | string;
  art: null | string;
  playlist: null | any[];
  showPlayer: boolean;
  music?: any | null;
  recentTracks?: any | null;
  current?: any | null;
}

const initialState: PlayerInterface = {
  isPlaying: false,
  artist: null,
  title: null,
  link: null,
  art: null,
  music: null,
  playlist: null,
  recentTracks: null,
  showPlayer: false,
  current: null,
};

const Player = (state = initialState, action: any) => {
  switch (action.type) {
    case PLAY_NEW:
      return {
        ...state,
        artist: action.artist,
        title: action.title,
        art: action.art,
        link: action.link,
        music: action.music,
        isPlaying: true,
        showPlayer: true,
      };
    case PLAY:
      return {
        ...state,
        isPlaying: true,
        showPlayer: true,
      };
    case PAUSE:
      return {
        ...state,
        isPlaying: false,
      };
    case STOP:
      return {
        ...state,
        isPlaying: false,
        showPlayer: false,
      };
    default:
      return state;
  }
};

export default Player;

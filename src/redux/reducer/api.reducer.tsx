import {GET_RANDOM, SEARCH} from '../../constants';

interface APIInterface {
  data: any[] | null;
}

const initialState: APIInterface = {
  data: null,
};

const API = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_RANDOM:
      return {
        ...state,
        data: action.data,
      };
    case SEARCH:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
};

export default API;

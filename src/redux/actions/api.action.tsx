import {SEARCH, GET_RANDOM, ERROR} from '../../constants';

const APIAction = (props: any) => {
  const {dispatch} = props;

  const search = (searchText: string) => {
    try {
      fetch(
        `https://plankton-app-5voay.ondigitalocean.app/track/search/${searchText}`,
      )
        .then(response => {
          return response.json();
        })
        .then(response => {
          const {data} = response;
          console.log(response);
          dispatch({
            type: SEARCH,
            data,
          });
        })
        .catch((error: any) => {
          console.log(error);
          dispatch({
            type: ERROR,
          });
        });
    } catch (error) {
      dispatch({
        type: ERROR,
      });
    }
  };

  const getRandom = () => {
    try {
      fetch('https://plankton-app-5voay.ondigitalocean.app/track/all?limit=100')
        .then(response => {
          return response.json();
        })
        .then(response => {
          const {data} = response;
          dispatch({
            type: GET_RANDOM,
            data,
          });
        })
        .catch((error: any) => {
          console.log(error);
          dispatch({
            type: ERROR,
          });
        });
    } catch (error) {
      dispatch({
        type: ERROR,
      });
    }
  };

  return {
    search,
    getRandom,
  };
};

export default APIAction;

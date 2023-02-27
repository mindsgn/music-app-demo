import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    bottom: '2%',
    width: '100%',
    height: 60,
    backgroundColor: 'black',
    zIndex: 1,
    alignItems: 'center',
  },
  detailsContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  track: {
    fontSize: 21,
    color: 'white',
  },
  artist: {
    fontSize: 10,
    color: 'white',
  },
});

export default styles;

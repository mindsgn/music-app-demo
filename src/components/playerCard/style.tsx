import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    position: 'absolute',
    bottom: 50,
    padding: 10,
  },
  containerBackground: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    borderRadius: 10,
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 20,
    margin: 5,
  },
  text: {},
  textArtist: {
    color: 'white',
  },
  textTitle: {
    color: 'white',
  },
  button: {
    backgroundColor: 'white',
    display: 'flex',
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 350,
    borderRadius: 15,
    margin: 4,
    flex: 1,
    justifyContent: 'flex-end',
  },
  image: {},
  details: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'black',
    justifyContent: 'space-between',
    padding: 10,
  },
  text: {
    color: 'white',
  },
  textArtist: {
    color: 'white',
  },
  textTitle: {
    fontSize: 21,
    color: 'white',
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    width: 30,
    height: 30,
    backgroundColor: 'white',
  },
});

export default styles;

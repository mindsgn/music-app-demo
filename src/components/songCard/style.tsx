import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height: 350,
    borderRadius: 30,
    margin: 4,
    flex: 1,
    justifyContent: 'flex-end',
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 350,
    borderRadius: 30,
    margin: 4,
    flex: 1,
    justifyContent: 'flex-end',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 10,
    height: 100,
  },
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
    color: '#3A3C3C',
  },
  textTitle: {
    fontSize: 21,
    color: '#E0E0E0',
    fontWeight: 'bold',
  },
  source: {
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0.2)',
    blurRadius: 80,
    height: 40,
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
  },
});

export default styles;

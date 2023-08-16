import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: 50,
    bottom: 0,
    zIndex: 1,
    backgroundColor: '#000000',
    padding: 5,
  },
  blurContainer: {
    position: 'relative',
    width: '100%',
    height: '100%',
    padding: 0,
    display: 'flex',
    flexDirection: 'row',
  },
  detailsContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
  },
  imageContainer: {
    width: 50,
    height: 50,
    backgroundColor: 'black',
  },
  textContainer: {
    paddingLeft: 10,
  },
  artistText: {color: 'white'},
  titleText: {
    fontSize: 21,
    color: '#E0E0E0',
    fontWeight: 'bold',
  },
});

export default styles;

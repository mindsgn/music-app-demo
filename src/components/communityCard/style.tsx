import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  Imagecontainer: {
    position: 'relative',
    width: '100%',
    height: 180,
    top: 0,
    zIndex: 1,
    marginBottom: 10,
  },
  textContainer: {
    padding: 15,
  },
  buttonContainer: {
    padding: 15,
    display: 'flex',
    alignItems: 'flex-end',
  },
  button: {
    backgroundColor: 'black',
    padding: 20,
    width: 80,
    borderRadius: 15,
    display: 'flex',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'SF-Pro-Rounded-Heavy',
    color: 'white',
    fontSize: 31,
  },
  buttonText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default styles;

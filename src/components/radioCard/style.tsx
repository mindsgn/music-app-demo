import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    bottom: '2%',
    width: '100%',
    height: 150,
    padding: 20,
    backgroundColor: 'black',
    zIndex: 1,
    borderRadius: 20,
    alignItems: 'center',
  },
  detailsContainer: {
    flex: 1,
    marginRight: 10,
  },
  buttonContainer: {},
  title: {
    color: 'white',
    fontSize: 21,
    fontWeight: 'bold',
    width: '80%',
  },
  text: {
    color: 'white',
    fontSize: 12,
    width: '80%',
  },
});

export default styles;

import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 34,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  descriptionInp: {
    marginTop: 32,
    height: 50,
    paddingVertical: 15,

    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    lineHeight: 19,

    color: '#212121',

    borderBottomColor: '#E8E8E8',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },

  locationWrapper: {},
  locationIco: {
    position: 'absolute',
    top: '50%',
    transform: [{ translateY: -4 }],
  },
  locationInp: {
    marginTop: 16,
    height: 50,
    paddingLeft: 28,
    paddingVertical: 15,

    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    lineHeight: 19,

    color: '#212121',

    borderBottomColor: '#E8E8E8',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },

  submitBtn: {
    marginTop: 32,
  },

  deleteBtn: {
    marginVertical: 34,
    left: '50%',
    transform: [{ translateX: -35 }],
  },
});

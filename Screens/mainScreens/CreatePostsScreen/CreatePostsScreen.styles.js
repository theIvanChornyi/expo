import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    paddingBottom: 34,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },

  imageWrapper: {
    position: 'relative',
  },
  postImage: {},
  defaultImage: {
    minHeight: 240,
    backgroundColor: '#F6F6F6',

    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderStyle: 'solid',
    borderRadius: 8,
  },
  cameraContainer: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    width: 60,
    height: 60,

    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#FFFFFF',
    borderRadius: 50,

    transform: [{ translateX: -30 }, { translateY: -30 }],
  },
  imageActionText: {
    marginTop: 8,

    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,

    color: '#BDBDBD',
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

  locationWrapper: {
    position: 'relative',
  },
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
    position: 'absolute',
    bottom: 34,
    left: '50%',
    transform: [{ translateX: -35 }],
  },
});

import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 34,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },

  imageWrapper: { borderRadius: 8 },
  postImage: { minHeight: 240, overflow: 'hidden', borderRadius: 8 },
  camera: {
    minHeight: 240,
    backgroundColor: '#F6F6F6',
    overflow: 'hidden',

    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderStyle: 'solid',
    borderRadius: 8,
  },

  loader: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: [{ translateX: -15 }, { translateY: -15 }],
  },

  cameraContainer: {
    position: 'absolute',
    overflow: 'hidden',
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

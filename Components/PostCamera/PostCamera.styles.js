import { StyleSheet } from 'react-native';

export const cameraStyle = StyleSheet.create({
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
});

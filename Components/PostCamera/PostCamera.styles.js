import { StyleSheet } from 'react-native';

export const cameraStyle = StyleSheet.create({
  postImage: {
    height: 240,
    overflow: 'hidden',
    borderRadius: 8,
  },
  camera: {
    backgroundColor: '#F6F6F6',
    overflow: 'hidden',
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

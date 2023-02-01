import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  profileField: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: 103,
  },
  avatar: {
    position: 'absolute',
    backgroundColor: '#F6F6F6',
    left: '50%',
    top: -60,
    width: 120,
    height: 120,

    borderRadius: 16,
    transform: [{ translateX: -60 }],
  },
  title: {
    marginTop: 46,
    fontFamily: 'Roboto-Bold',
    fontSize: 30,
    lineHeight: 35,
    textAlign: 'center',
    letterSpacing: 0.01,
  },
});

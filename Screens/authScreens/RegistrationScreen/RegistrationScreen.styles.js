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
  container: {
    flex: 1,
  },
  authField: {
    position: 'relative',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: 323,
  },
  avatarContainer: {
    position: 'absolute',
    backgroundColor: '#F6F6F6',
    left: '50%',
    top: -60,
    width: 120,
    height: 120,

    borderRadius: 16,
    transform: [{ translateX: -60 }],
  },

  addAvatarBtn: {
    position: 'absolute',
    right: -25 / 2,
    bottom: 14,
    width: 25,
    height: 25,
  },

  title: {
    marginTop: 92,
    marginBottom: 16,
    fontFamily: 'Roboto-Bold',

    fontSize: 30,
    lineHeight: 35,
    textAlign: 'center',
    letterSpacing: 0.01,

    color: '#212121',
  },
  authInput: {
    height: 50,

    padding: 16,
    marginHorizontal: 16,
    marginBottom: 16,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
    color: '#212121',

    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 8,
  },
  passwordWrapper: {
    position: 'relative',
  },
  passwordInp: {},
  passwordBtn: {
    position: 'absolute',
    right: 16,

    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  passwordBtnText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
    color: '#1B4371',
  },
  submitBtn: {
    paddingHorizontal: 32,
    paddingVertical: 16,
    marginHorizontal: 16,
    marginTop: 43,

    backgroundColor: '#FF6C00',
    borderRadius: 100,
  },
  submitBtnText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  navBtn: {
    marginTop: 16,
    paddingBottom: 7,
    marginBottom: 260,
  },
  navBtnText: {
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
    color: '#1B4371',
  },
});

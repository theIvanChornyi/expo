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
  container: {},
  authField: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: 323,
  },
  title: {
    marginTop: 32,
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
    borderColor: '#E8E8E8',
    borderRadius: 8,
  },
  passwordWrapper: {
    position: 'relative',
  },
  submitBtn: {
    marginHorizontal: 16,
    marginTop: 43,
  },
});

import { Dimensions, StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  background: {
    height: Dimensions.get('window').height,
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
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: 323,
  },
  title: {
    marginTop: 32,
    marginBottom: 16,
    // fontFamily: 'Roboto',
    // fontStyle: 'normal',
    // fontWeight: 500,
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

    // font-family: 'Roboto',
    // fontFamily: 'Roboto',
    // fontStyle: 'normal',
    // fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: '#212121',

    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderStyle: 'solid',
    // borderColor: '#E8E8E8',
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
    // fontFamily: 'Roboto',
    // fontStyle: 'normal',
    // fontWeight: 400,
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
    // fontFamily: 'Roboto',
    // fontStyle: 'normal',
    // fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  navBtn: { marginTop: 16, paddingBottom: 7, marginBottom: 260 },
  navBtnText: {
    textAlign: 'center',
    // fontFamily: 'Roboto',
    // fontStyle: 'normal',
    // fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: '#1B4371',
  },
});

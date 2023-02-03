import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  list: { backgroundColor: '#fff', paddingHorizontal: 16 },

  inputWrapper: {
    marginTop: 10,
    marginHorizontal: 16,
    backgroundColor: '#fff',
  },
  input: {
    padding: 16,
    paddingRight: 48,
    height: 50,
    borderRadius: 100,
    backgroundColor: '#E8E8E8',

    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    lineHeight: 19,
  },
  sendBtn: {
    position: 'absolute',
    top: '50%',
    right: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    height: 34,
    width: 34,
    backgroundColor: '#FF6C00',
    transform: [{ translateY: -17 }],
  },
});

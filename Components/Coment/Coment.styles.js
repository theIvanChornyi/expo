import { StyleSheet } from 'react-native';

export const commentStyle = StyleSheet.create({
  commentWrapper: {
    padding: 16,
    flex: 2,
    borderRadius: 6,
    backgroundColor: '#00000008',
  },
  comment: {
    fontFamily: 'Roboto-Regular',
    fontSize: 13,
    lineHeight: 18,
    color: '#212121',
  },
  commentData: {
    marginTop: 8,
    fontFamily: 'Roboto-Regular',
    fontSize: 10,
    lineHeight: 12,
    textAlign: 'right',
    color: '#BDBDBD',
  },
});

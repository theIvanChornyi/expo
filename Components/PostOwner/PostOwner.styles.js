import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  postContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 32,
  },
  postImage: {
    width: 60,
    height: 60,
  },
  postText: {
    marginLeft: 8,
  },
  postName: {
    fontFamily: 'Roboto-Bold',
    fontSize: 13,
    lineHeight: 15,
    color: '#212121',
  },
  postEmail: {
    fontFamily: 'Roboto-Regular',
    fontSize: 11,
    lineHeight: 13,
    color: '#212121',
    opacity: 0.8,
  },
});

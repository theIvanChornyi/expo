import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  postContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    alignItems: 'center',
  },
  postImage: {
    width: 60,
    height: 60,
  },
  postText: {
    gap: 20,
    marginLeft: 8,
  },
  postName: {},
  postEmail: {},
});

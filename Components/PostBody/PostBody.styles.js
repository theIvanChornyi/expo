import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  picture: {
    flex: 1,
    minWidth: '100%',
    minHeight: 240,
  },
  title: {
    alignSelf: 'flex-start',
    marginTop: 8,

    textAlign: 'left',
    fontfamily: 'Roboto-Bold',
    fontSize: 16,
    lineHeight: 19,
  },
  postWrapper: {
    flex: 1,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  buttons: {
    flexDirection: 'row',
    flex: 1,
  },
  location: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  locationImage: {
    marginRight: 6,
  },
  locationText: {
    textDecorationLine: 'underline',
  },
});

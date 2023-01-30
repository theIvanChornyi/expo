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
});

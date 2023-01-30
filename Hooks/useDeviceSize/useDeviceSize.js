import { useEffect } from 'react';
import { Dimensions } from 'react-native';

export const useDeviceSize = () => {
  let width, height;

  useEffect(() => {
    width = Dimensions.get('window').width;
    height = Dimensions.get('window').height;
  }, []);

  return { width, height };
};

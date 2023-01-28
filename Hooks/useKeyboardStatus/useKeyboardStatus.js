import { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';

export const useKeyboardStatus = () => {
  const [isHide, setIsHide] = useState(false);
  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setIsHide(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setIsHide(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);
  return isHide;
};

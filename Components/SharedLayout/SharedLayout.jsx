import { useCallback, useEffect, useState } from 'react';
import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import { ImageBackground } from 'react-native';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useKeyboardStatus } from '../../Hooks/useKeyboardStatus/useKeyboardStatus';
import { useDeviceSize } from '../../Hooks/useDeviceSize/useDeviceSize';

import { style } from './SharedLayout.styles';
import { Loader } from '../Loader/Loader';

export const SharedLayout = ({ children }) => {
  const [isReady, setIsReady] = useState(false);
  const { width, height } = useDeviceSize();
  const [fontsLoaded] = useFonts({
    'Roboto-Medium': require('../../assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Regular': require('../../assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('../../assets/fonts/Roboto-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
      setIsReady(true);
    }
  }, [fontsLoaded]);

  const hideKeyborard = () => {
    setIsHide(true);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback
      onPress={hideKeyborard}
      onLayout={onLayoutRootView}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={style.container}
      >
        <ImageBackground
          source={require('../../img/bg/starttBG.jpg')}
          style={{ ...style.background, width }}
        >
          {isReady ? children : <Loader />}
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

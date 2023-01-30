import { useCallback, useState } from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Keyboard,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { useKeyboardStatus } from '../../Hooks/useKeyboardStatus/useKeyboardStatus.js';
import { style } from './RegistrationScreen.styles';
import { Loader } from '../../Components/Loader/Loader.jsx';
import { useDeviceSize } from '../../Hooks/useDeviceSize/useDeviceSize.js';

const initialState = {
  login: '',
  email: '',
  password: '',
};

export const RegistrationScreen = () => {
  const [authData, setAuthData] = useState(initialState);
  const [isHide, setIsHide] = useState(true);
  const [activeField, setActiveField] = useState('');
  const [isReady, setIsReady] = useState(false);

  const isShowKeyboard = useKeyboardStatus();
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

  const login = () => {
    console.log(authData);

    hideKeyborard();
    setAuthData(initialState);
  };

  if (!fontsLoaded) {
    return null;
  }
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
          {isReady ? (
            <View
              style={{
                ...style.authField,
                marginTop: isShowKeyboard ? 147 : 263,
              }}
            >
              <View style={style.avatarContainer}>
                <Image
                  style={style.avatar}
                  source={require('../../img/svg/add.svg')}
                />
                <TouchableOpacity style={style.addAvatarBtn}>
                  <Image style={style.addAvatarIco} />
                </TouchableOpacity>
              </View>
              <Text style={style.title}>Регистрация</Text>

              <TextInput
                style={{
                  ...style.authInput,
                  borderColor: activeField === 'login' ? '#FF6C00' : '#E8E8E8',
                }}
                value={authData.login}
                placeholder="Логин"
                placeholderTextColor="#BDBDBD"
                onChangeText={value =>
                  setAuthData(p => ({ ...p, login: value }))
                }
                onFocus={() => setActiveField('login')}
                onBlur={() => setActiveField('')}
              />

              <TextInput
                style={{
                  ...style.authInput,
                  borderColor: activeField === 'email' ? '#FF6C00' : '#E8E8E8',
                }}
                value={authData.email}
                keyboardType={'email-address'}
                placeholder="Адрес электронной почты"
                placeholderTextColor="#BDBDBD"
                onChangeText={value =>
                  setAuthData(p => ({ ...p, email: value }))
                }
                onFocus={() => setActiveField('email')}
                onBlur={() => setActiveField('')}
              />

              <View style={style.passwordWrapper}>
                <TextInput
                  style={{
                    ...style.authInput,
                    ...style.passwordInp,
                    borderColor:
                      activeField === 'password' ? '#FF6C00' : '#E8E8E8',
                  }}
                  value={authData.password}
                  secureTextEntry={isHide}
                  placeholder="Пароль"
                  placeholderTextColor="#BDBDBD"
                  onChangeText={value =>
                    setAuthData(p => ({ ...p, password: value }))
                  }
                  onFocus={() => setActiveField('password')}
                  onBlur={() => {
                    setIsHide(true);
                    setActiveField('');
                  }}
                />
                <TouchableOpacity
                  style={style.passwordBtn}
                  activeOpacity={0.4}
                  onPress={() => setIsHide(p => !p)}
                >
                  <Text style={style.passwordBtnText}>Показать</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={style.submitBtn} onPress={login}>
                <Text style={style.submitBtnText}>Зарегистрироваться</Text>
              </TouchableOpacity>

              <TouchableOpacity style={style.navBtn}>
                <Text style={style.navBtnText}>Уже есть аккаунт? Войти</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <Loader />
          )}
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

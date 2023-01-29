import { useEffect, useState } from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Dimensions,
  Keyboard,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useKeyboardStatus } from '../../Hooks/useKeyboardStatus/useKeyboardStatus.js';

import { style } from './LoginScreen.styles.js';

const initialState = {
  login: '',
  password: '',
};

export const LoginScreen = () => {
  const [authData, setAuthData] = useState(initialState);
  const [isHide, setIsHide] = useState(true);
  const isShowKeyboard = useKeyboardStatus();

  const hideKeyborard = () => {
    setIsHide(true);
    Keyboard.dismiss();
  };

  const login = () => {
    hideKeyborard();
    console.log(authData);
  };

  return (
    <TouchableWithoutFeedback onPress={hideKeyborard}>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={style.container}
      >
        <ImageBackground
          source={require('../../img/bg/starttBG.jpg')}
          style={style.background}
        >
          <View
            style={{
              ...style.authField,
              marginTop: isShowKeyboard ? 273 : 323,
            }}
          >
            <Text style={style.title}>Войти</Text>
            <TextInput
              style={style.authInput}
              value={authData.login}
              keyboardType={'email-address'}
              placeholder="Адрес электронной почты"
              placeholderTextColor="#BDBDBD"
              onChangeText={value => setAuthData(p => ({ ...p, login: value }))}
            />

            <View style={style.passwordWrapper}>
              <TextInput
                style={{ ...style.authInput, ...style.passwordInp }}
                value={authData.password}
                secureTextEntry={isHide}
                placeholder="Пароль"
                placeholderTextColor="#BDBDBD"
                onChangeText={value =>
                  setAuthData(p => ({ ...p, password: value }))
                }
                onBlur={() => setIsHide(true)}
              />
              <TouchableOpacity
                style={style.passwordBtn}
                activeOpacity={0.4}
                onPress={() => setIsHide(p => !p)}
              >
                <Text style={style.passwordBtnText}>Показать</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={style.submitBtn} onPress={hideKeyborard}>
              <Text style={style.submitBtnText}>Войти</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.navBtn} onPress={login}>
              <Text style={style.navBtnText}>
                Нет аккаунта? Зарегистрироваться
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

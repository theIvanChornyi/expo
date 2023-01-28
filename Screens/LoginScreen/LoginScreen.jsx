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
  const [isHide, setIsHide] = useState(initialState);
  const isShowKeyboard = useKeyboardStatus();

  const hideKeyborard = () => {
    console.log('hello');
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={hideKeyborard}>
      <ImageBackground
        source={require('../../img/bg/starttBG.jpg')}
        style={style.background}
      >
        {/* <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
          style={{ flex: 1 }}
        > */}
        <View style={style.container}>
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
                keyboardType={'default'}
                secureTextEntry={isHide}
                placeholder="Пароль"
                placeholderTextColor="#BDBDBD"
                onChangeText={value =>
                  setAuthData(p => ({ ...p, password: value }))
                }
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

            <TouchableOpacity style={style.navBtn}>
              <Text style={style.navBtnText}>
                Нет аккаунта? Зарегистрироваться
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* </KeyboardAvoidingView> */}
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

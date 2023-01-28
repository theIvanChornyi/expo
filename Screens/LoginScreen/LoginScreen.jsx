import { useState } from 'react';
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

import { style } from './LoginScreen.styles.js';

const initialState = {
  login: '',
  password: '',
};

export const LoginScreen = () => {
  const [authData, setAuthData] = useState(initialState);
  const [isHide, setIsHide] = useState(true);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      >
        <ImageBackground
          source={require('../../img/bg/starttBG.jpg')}
          style={style.background}
          resizeMode="cover"
        >
          <View style={style.container}>
            <View style={style.authField}>
              <Text style={style.title}>Войти</Text>
              <TextInput
                style={style.authInput}
                value={authData.login}
                keyboardType={'email-address'}
                placeholder="Адрес электронной почты"
                placeholderTextColor="#BDBDBD"
              />

              <View style={style.passwordWrapper}>
                <TextInput
                  style={{ ...style.authInput, ...style.passwordInp }}
                  value={authData.password}
                  secureTextEntry={isHide}
                  placeholder="Пароль"
                  placeholderTextColor="#BDBDBD"
                />
                <TouchableOpacity
                  style={style.passwordBtn}
                  activeOpacity={0.4}
                  onPress={() => setIsHide(p => !p)}
                >
                  <Text style={style.passwordBtnText}>Показать</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={style.submitBtn}>
                <Text style={style.submitBtnText}>Войти</Text>
              </TouchableOpacity>

              <TouchableOpacity style={style.navBtn}>
                <Text style={style.navBtnText}>
                  Нет аккаунта? Зарегистрироваться
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

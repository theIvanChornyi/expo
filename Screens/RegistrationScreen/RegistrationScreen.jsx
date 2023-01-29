import { useEffect, useState } from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Keyboard,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useKeyboardStatus } from '../../Hooks/useKeyboardStatus/useKeyboardStatus.js';
import { style } from './RegistrationScreen.styles';

const initialState = {
  login: '',
  email: '',
  password: '',
};

export const RegistrationScreen = () => {
  const [authData, setAuthData] = useState(initialState);
  const [isHide, setIsHide] = useState(true);
  const [activeField, setActiveField] = useState('');
  const isShowKeyboard = useKeyboardStatus();

  let width, height;

  useEffect(() => {
    width = Dimensions.get('window').width;
    height = Dimensions.get('window').height;
  }, []);

  const hideKeyborard = () => {
    setIsHide(true);
    Keyboard.dismiss();
  };

  const login = () => {
    console.log(authData);

    hideKeyborard();
    setAuthData(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={hideKeyborard}>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={style.container}
      >
        <ImageBackground
          source={require('../../img/bg/starttBG.jpg')}
          style={{ ...style.background, width }}
        >
          <View
            style={{
              ...style.authField,
              marginTop: isShowKeyboard ? 147 : 263,
            }}
          >
            <Text style={style.title}>Регистрация</Text>

            <TextInput
              style={{
                ...style.authInput,
                borderColor: activeField === 'login' ? '#FF6C00' : '#E8E8E8',
              }}
              value={authData.login}
              placeholder="Логин"
              placeholderTextColor="#BDBDBD"
              onChangeText={value => setAuthData(p => ({ ...p, login: value }))}
              onFocus={() => setActiveField('login')}
              onBlur={() => setActiveField('')}
            />

            <TextInput
              style={{
                ...style.authInput,
                borderColor: activeField === 'email' ? '#FF6C00' : '#E8E8E8',
              }}
              value={authData.login}
              keyboardType={'email-address'}
              placeholder="Адрес электронной почты"
              placeholderTextColor="#BDBDBD"
              onChangeText={value => setAuthData(p => ({ ...p, email: value }))}
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
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

import { useState } from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Keyboard,
  Text,
  ScrollView,
} from 'react-native';
import { useDeviceSize } from '../../../Hooks/useDeviceSize/useDeviceSize.js';
import { useKeyboardStatus } from '../../../Hooks/useKeyboardStatus/useKeyboardStatus.js';

import { SubmitBtn } from '../../../Components/SubmitBtn/SubmitBtn';
import { style } from './LoginScreen.styles.js';
import { NavAuthLink } from '../../../Components/NavAuthLink/NavAuthLink.jsx';
import { SecretPassBtn } from '../../../Components/SecretPassBtn/SecretPassBtn.jsx';

const initialState = {
  email: '',
  password: '',
};

export const LoginScreen = ({ navigation }) => {
  const [authData, setAuthData] = useState(initialState);
  const [isHide, setIsHide] = useState(true);
  const [activeField, setActiveField] = useState('');

  const isShowKeyboard = useKeyboardStatus();
  const { width, height } = useDeviceSize();

  const hideKeyborard = () => {
    setIsHide(true);
    Keyboard.dismiss();
  };

  const login = () => {
    console.log(authData);
    hideKeyborard();
    setAuthData(initialState);
    navigation.navigate('home');
  };

  return (
    <TouchableWithoutFeedback onPress={hideKeyborard}>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={style.container}
      >
        <ImageBackground
          source={require('../../../img/bg/starttBG.jpg')}
          style={{ ...style.background, width, height }}
        >
          <ScrollView
            style={{
              ...style.authField,
              marginTop: isShowKeyboard ? 273 : 323,
            }}
          >
            <Text style={style.title}>Войти</Text>
            <TextInput
              style={{
                ...style.authInput,
                borderColor: activeField === 'email' ? '#FF6C00' : '#E8E8E8',
              }}
              value={authData.email}
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
              <SecretPassBtn
                callback={() => setIsHide(p => !p)}
                isHide={isHide}
              />
            </View>

            <SubmitBtn
              title={'Войти'}
              callback={login}
              style={style.submitBtn}
            />

            <NavAuthLink
              title={'Нет аккаунта? Зарегистрироваться'}
              callback={() => navigation.navigate('register')}
            />
          </ScrollView>
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

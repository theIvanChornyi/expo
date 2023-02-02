import { useState } from 'react';
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

import { useKeyboardStatus } from '../../../Hooks/useKeyboardStatus/useKeyboardStatus.js';
import { style } from './RegistrationScreen.styles';
import { useDeviceSize } from '../../../Hooks/useDeviceSize/useDeviceSize.js';
import { AddPhotoBtn } from '../../../Components/AddPhotoBtn/AddPhotoBtn.jsx';
import { SubmitBtn } from '../../../Components/SubmitBtn/SubmitBtn.jsx';
import { NavAuthLink } from '../../../Components/NavAuthLink/NavAuthLink.jsx';
import { SecretPassBtn } from '../../../Components/SecretPassBtn/SecretPassBtn.jsx';

const initialState = {
  login: '',
  email: '',
  password: '',
};

export const RegistrationScreen = ({ navigation }) => {
  const [authData, setAuthData] = useState(initialState);
  const [isHide, setIsHide] = useState(true);
  const [activeField, setActiveField] = useState('');
  const [isAdded, setIsAdded] = useState(false);

  const isShowKeyboard = useKeyboardStatus();
  const { width, height } = useDeviceSize();

  const changeAvatar = () => {
    setIsAdded(p => !p);
  };

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
          <View
            style={{
              ...style.authField,
              marginTop: isShowKeyboard ? 147 : 263,
            }}
          >
            <View style={style.avatarContainer}>
              <Image />
              <AddPhotoBtn
                style={{ bottom: 14, right: -25 / 2 }}
                {...{ isAdded, changeAvatar }}
              />
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
              onChangeText={value => setAuthData(p => ({ ...p, login: value }))}
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
              title={'Зарегистрироваться'}
              callback={login}
              style={style.submitBtn}
            />
            <NavAuthLink
              title={'Уже есть аккаунт? Войти'}
              callback={() => navigation.navigate('login')}
            />
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

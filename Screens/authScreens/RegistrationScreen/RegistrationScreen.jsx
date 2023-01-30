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
import Plus from '../../../img/svg/add.svg';

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
          style={{ ...style.background, width }}
        >
          <View
            style={{
              ...style.authField,
              marginTop: isShowKeyboard ? 147 : 263,
            }}
          >
            <View style={style.avatarContainer}>
              <Image style={style.avatar} />
              <TouchableOpacity
                activeOpacity={1}
                style={style.addAvatarBtn}
                onPress={() => setIsAdded(p => !p)}
              >
                <Plus
                  stroke={isAdded ? '#BDBDBD' : '#FF6C00'}
                  style={{
                    transform: [{ rotate: isAdded ? '45deg' : '0deg' }],
                  }}
                />
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

            <TouchableOpacity
              style={style.navBtn}
              onPress={() => navigation.navigate('login')}
            >
              <Text style={style.navBtnText}>Уже есть аккаунт? Войти</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

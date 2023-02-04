import { useState } from 'react';
import Toast from 'react-native-root-toast';

import {
  ImageBackground,
  KeyboardAvoidingView,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Keyboard,
  Text,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import { useKeyboardStatus } from '../../../Hooks/useKeyboardStatus/useKeyboardStatus.js';

import { SubmitBtn } from '../../../Components/SubmitBtn/SubmitBtn';
import { style } from './LoginScreen.styles.js';
import { NavAuthLink } from '../../../Components/NavAuthLink/NavAuthLink.jsx';
import { SecretPassBtn } from '../../../Components/SecretPassBtn/SecretPassBtn.jsx';
import {
  validateEmail,
  validatePassword,
} from '../../../helpers/validation.js';

const initialState = {
  email: '',
  password: '',
};

export const LoginScreen = ({ navigation }) => {
  const { height, width } = useWindowDimensions();
  const isShowKeyboard = useKeyboardStatus();

  const [authData, setAuthData] = useState(initialState);
  const [isHide, setIsHide] = useState(true);
  const [activeField, setActiveField] = useState('');
  const [invalidFields, setInvalidFields] = useState([]);
  const [toast, setToast] = useState(null);

  const hideKeyborard = () => {
    setIsHide(true);
    Keyboard.dismiss();
  };

  const login = () => {
    hideKeyborard();
    setAuthData(initialState);
  };

  const validateEmailField = () => {
    const isValid = validateEmail(authData.email);
    toast && Toast.hide(toast);
    if (!isValid) {
      setToast(
        Toast.show('It should valid email adress!', {
          position: 0,
        })
      );
      setInvalidFields(p => [...p, 'email']);
    } else setInvalidFields(p => [...p.filter(name => name !== 'email')]);
    setActiveField('');
  };

  const validatePasswordField = () => {
    const isValid = validatePassword(authData.password);
    toast && Toast.hide(toast);
    if (!isValid) {
      setToast(
        Toast.show('It should valid password!', {
          position: 0,
        })
      );
      setInvalidFields(p => [...p, 'password']);
    } else setInvalidFields(p => [...p.filter(name => name !== 'password')]);
    setActiveField('');
    setIsHide(true);
  };

  return (
    <TouchableWithoutFeedback onPress={hideKeyborard}>
      <ScrollView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
          style={{
            ...style.container,
            width,
            height: height < width ? width : height,
          }}
        >
          <ImageBackground
            source={require('../../../img/bg/starttBG.jpg')}
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
                style={{
                  ...style.authInput,
                  borderColor: activeField === 'email' ? '#FF6C00' : '#E8E8E8',
                  color: invalidFields.some(name => name === 'email')
                    ? 'red'
                    : '#212121',
                }}
                value={authData.email}
                keyboardType={'email-address'}
                placeholder="Адрес электронной почты"
                placeholderTextColor="#BDBDBD"
                onChangeText={value =>
                  setAuthData(p => ({ ...p, email: value }))
                }
                onFocus={() => setActiveField('email')}
                onBlur={validateEmailField}
              />

              <View style={style.passwordWrapper}>
                <TextInput
                  style={{
                    ...style.authInput,
                    ...style.passwordInp,
                    borderColor:
                      activeField === 'password' ? '#FF6C00' : '#E8E8E8',
                    color: invalidFields.some(name => name === 'password')
                      ? 'red'
                      : '#212121',
                  }}
                  value={authData.password}
                  secureTextEntry={isHide}
                  placeholder="Пароль"
                  placeholderTextColor="#BDBDBD"
                  onChangeText={value =>
                    setAuthData(p => ({ ...p, password: value }))
                  }
                  onFocus={() => setActiveField('password')}
                  onBlur={validatePasswordField}
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
            </View>
          </ImageBackground>
        </KeyboardAvoidingView>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

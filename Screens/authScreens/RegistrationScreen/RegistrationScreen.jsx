import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Toast from 'react-native-root-toast';

import {
  ImageBackground,
  KeyboardAvoidingView,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Keyboard,
  Text,
  Image,
  useWindowDimensions,
  ScrollView,
} from 'react-native';

import { useKeyboardStatus } from '../../../Hooks/useKeyboardStatus/useKeyboardStatus.js';
import { style } from './RegistrationScreen.styles';
import { AddPhotoBtn } from '../../../Components/AddPhotoBtn/AddPhotoBtn.jsx';
import { SubmitBtn } from '../../../Components/SubmitBtn/SubmitBtn.jsx';
import { NavAuthLink } from '../../../Components/NavAuthLink/NavAuthLink.jsx';
import { SecretPassBtn } from '../../../Components/SecretPassBtn/SecretPassBtn.jsx';
import { signUpUser } from '../../../redux/auth/authThunks.js';
import {
  validateLogin,
  validateEmail,
  validatePassword,
} from '../../../helpers/validation.js';

const initialState = {
  login: '',
  email: '',
  password: '',
};

export const RegistrationScreen = ({ navigation }) => {
  const { height, width } = useWindowDimensions();
  const isShowKeyboard = useKeyboardStatus();

  const [authData, setAuthData] = useState(initialState);
  const [isHide, setIsHide] = useState(true);
  const [activeField, setActiveField] = useState('');
  const [invalidFields, setInvalidFields] = useState([]);
  const [toast, setToast] = useState(null);

  const [isAdded, setIsAdded] = useState(false);

  const dispatch = useDispatch();

  const changeAvatar = () => {
    setIsAdded(p => !p);
  };

  const hideAll = () => {
    hideKeyborard();
    toast && Toast.hide(toast);
  };

  const hideKeyborard = () => {
    setIsHide(true);
    Keyboard.dismiss();
  };

  const signIn = () => {
    dispatch(signUpUser(authData));
    hideAll();
    setAuthData(initialState);
  };

  const validateNicknameField = () => {
    const isValid = validateLogin(authData.login);
    toast && Toast.hide(toast);
    if (!isValid) {
      setToast(
        Toast.show('Nikcname can includes only letters!', {
          position: 0,
        })
      );
      setInvalidFields(p => [...p, 'login']);
    } else setInvalidFields(p => [...p.filter(name => name !== 'login')]);
    setActiveField('');
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

  const focusOut = () => {
    setActiveField('');
  };

  return (
    <TouchableWithoutFeedback onPress={hideAll}>
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
                  color: invalidFields.some(name => name === 'login')
                    ? 'red'
                    : '#212121',
                }}
                value={authData.login}
                placeholder="Логин"
                placeholderTextColor="#BDBDBD"
                onChangeText={value =>
                  setAuthData(p => ({ ...p, login: value }))
                }
                onFocus={() => setActiveField('login')}
                onBlur={validateNicknameField}
              />

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
                title={'Зарегистрироваться'}
                callback={signIn}
                style={style.submitBtn}
                disabled={
                  !validateLogin(authData.login) &&
                  !validateEmail(authData.email) &&
                  !validatePassword(authData.password)
                }
              />
              <NavAuthLink
                title={'Уже есть аккаунт? Войти'}
                callback={() => navigation.navigate('login')}
              />
            </View>
          </ImageBackground>
        </KeyboardAvoidingView>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

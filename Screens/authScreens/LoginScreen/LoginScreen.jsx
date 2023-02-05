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
import { validateInput } from '../../../helpers/validation.js';
import { useDispatch } from 'react-redux';
import { signInUser } from '../../../redux/auth/authThunks.js';

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
  const [validFields] = useState(() => new Set());
  const [toast, setToast] = useState(null);

  const dispatch = useDispatch();

  const hideKeyborard = () => {
    setIsHide(true);
    Keyboard.dismiss();
  };

  const login = () => {
    dispatch(signInUser(authData));
    hideKeyborard();
    validFields.clear();
    setAuthData(initialState);
  };

  const onChangeText = (value, fieldName) => {
    if (validateInput(authData, fieldName)) {
      validFields.delete(fieldName);
    } else {
      validFields.add(fieldName);
    }
    setAuthData(p => ({ ...p, [fieldName]: value }));
  };

  const onBlurValidation = (fieldName, alarmtext) => {
    toast && Toast.hide(toast);
    if (validateInput(authData, fieldName)) {
      setToast(
        Toast.show(alarmtext, {
          position: 0,
        })
      );
      validFields.delete(fieldName);
    } else {
      validFields.add(fieldName);
    }
    setActiveField('');
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
                  color: validFields.has('email') ? '#212121' : 'red',
                }}
                value={authData.email}
                keyboardType={'email-address'}
                placeholder="Адрес электронной почты"
                placeholderTextColor="#BDBDBD"
                onChangeText={value => onChangeText(value, 'email')}
                onFocus={() => setActiveField('email')}
                onBlur={() =>
                  onBlurValidation('email', 'It should valid email adress!')
                }
              />

              <View style={style.passwordWrapper}>
                <TextInput
                  style={{
                    ...style.authInput,
                    ...style.passwordInp,
                    borderColor:
                      activeField === 'password' ? '#FF6C00' : '#E8E8E8',
                    color: validFields.has('password') ? '#212121' : 'red',
                  }}
                  value={authData.password}
                  secureTextEntry={isHide}
                  placeholder="Пароль"
                  placeholderTextColor="#BDBDBD"
                  onChangeText={value => onChangeText(value, 'password')}
                  onFocus={() => setActiveField('password')}
                  onBlur={() =>
                    onBlurValidation('password', 'It should valid password!')
                  }
                />
                <SecretPassBtn
                  callback={() => setIsHide(p => !p)}
                  isHide={isHide}
                />
              </View>

              <SubmitBtn
                disabled={validFields.size < 2}
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

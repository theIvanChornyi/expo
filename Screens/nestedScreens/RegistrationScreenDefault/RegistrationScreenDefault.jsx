import { useEffect, useState } from 'react';
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
import { style } from './RegistrationScreenDefault.styles';
import { AddPhotoBtn } from '../../../Components/AddPhotoBtn/AddPhotoBtn.jsx';
import { SubmitBtn } from '../../../Components/SubmitBtn/SubmitBtn.jsx';
import { NavAuthLink } from '../../../Components/NavAuthLink/NavAuthLink.jsx';
import { SecretPassBtn } from '../../../Components/SecretPassBtn/SecretPassBtn.jsx';
import { signUpUser } from '../../../redux/auth/authThunks.js';
import { validateInput } from '../../../helpers/validation.js';
import { sendPhotoToStorage } from '../../../services/firebase/sendPhotoToStorage.js';

const initialState = {
  login: '',
  email: '',
  password: '',
  photo: '',
};

export const RegistrationScreenDefault = ({ navigation, route }) => {
  const { height, width } = useWindowDimensions();
  const isShowKeyboard = useKeyboardStatus();

  const [authData, setAuthData] = useState(initialState);
  const [isHide, setIsHide] = useState(true);

  const [activeField, setActiveField] = useState('');
  const [validFields] = useState(() => new Set());

  const [toast, setToast] = useState(null);

  const photo = route?.params?.item;

  useEffect(() => {
    if (photo) {
      setAuthData(p => ({ ...p, photo: photo.uri }));
    }
  }, [photo]);

  const dispatch = useDispatch();

  const changeAvatar = () => {
    navigation.navigate('RegistrationCamera');
  };
  const deletePhoto = () => {
    setAuthData(p => ({ ...p, photo: '' }));
  };

  const hideAll = () => {
    hideKeyborard();
    toast && Toast.hide(toast);
  };

  const hideKeyborard = () => {
    setIsHide(true);
    Keyboard.dismiss();
  };

  const signIn = async () => {
    dispatch(signUpUser(authData));
    hideAll();
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
                <Image
                  source={
                    authData?.photo
                      ? { uri: authData?.photo }
                      : require('../../../img/emptyUser.jpg')
                  }
                  style={style.avatarImage}
                />
                <AddPhotoBtn
                  style={{ bottom: 14, right: -25 / 2 }}
                  {...{ changeAvatar, deletePhoto, photoURL: authData.photo }}
                />
              </View>
              <Text style={style.title}>??????????????????????</Text>

              <TextInput
                style={{
                  ...style.authInput,
                  borderColor: activeField === 'login' ? '#FF6C00' : '#E8E8E8',
                  color: validFields.has('login') ? '#212121' : 'red',
                }}
                value={authData.login}
                placeholder="??????????"
                placeholderTextColor="#BDBDBD"
                onChangeText={value => onChangeText(value, 'login')}
                onFocus={() => setActiveField('login')}
                onBlur={() =>
                  onBlurValidation('login', 'It should valid login!')
                }
              />

              <TextInput
                style={{
                  ...style.authInput,
                  borderColor: activeField === 'email' ? '#FF6C00' : '#E8E8E8',
                  color: validFields.has('email') ? '#212121' : 'red',
                }}
                value={authData.email}
                keyboardType={'email-address'}
                placeholder="?????????? ?????????????????????? ??????????"
                placeholderTextColor="#BDBDBD"
                onChangeText={value => onChangeText(value, 'email')}
                onFocus={() => setActiveField('email')}
                onBlur={() =>
                  onBlurValidation('email', 'It should valid email!')
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
                  placeholder="????????????"
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
                disabled={validFields.size < 3}
                title={'????????????????????????????????????'}
                callback={signIn}
                style={style.submitBtn}
              />
              <NavAuthLink
                title={'?????? ???????? ??????????????? ??????????'}
                callback={() => navigation.navigate('login')}
              />
            </View>
          </ImageBackground>
        </KeyboardAvoidingView>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

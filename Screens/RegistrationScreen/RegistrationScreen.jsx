import { useState } from 'react';
import {
  Button,
  ImageBackground,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Dimensions,
  Image,
} from 'react-native';

const initialState = {
  login: '',
  email: '',
  password: '',
  picture: null,
};

export const RegistrationScreen = () => {
  const [authData, setAuthData] = useState(initialState);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      >
        <ImageBackground source={(require = '../../img/bg/starttBG.jpg')}>
          <View style={style.container}>
            <View style={style.authField}>
              <Text style={style.title}>Регистрация</Text>
              <Image style={style.avatar} />
              <TextInput style={style.authInput} value={authData.login} />
              <TextInput style={style.authInput} value={authData.email} />

              <View style={style.passwordWrapper}>
                <TextInput
                  style={{ ...style.authInput, ...style.passwordInp }}
                  value={authData.password}
                />
                <Button style={style.passwordBtn}>Показать</Button>
              </View>

              <Button style={style.submitBtn}>Зарегистрироваться</Button>

              <Button style={style.navBtn}>Уже есть аккаунт? Войти</Button>
            </View>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const style = StyleSheet.create({
  container: {},
  authField: {},
  title: {},
  avatar: {},
  authInput: {},
  passwordWrapper: {},
  passwordInp: {},
  passwordBtn: {},
  submitBtn: {},
  navBtn: {},
});

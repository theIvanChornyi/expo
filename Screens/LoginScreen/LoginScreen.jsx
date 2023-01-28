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
} from 'react-native';

const initialState = {
  login: '',
  password: '',
};

export const LoginScreen = () => {
  const [authData, setAuthData] = useState(initialState);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      >
        <ImageBackground source={(require = '../../img/bg/starttBG.jpg')}>
          <View style={style.container}>
            <View style={style.authField}>
              <Text style={style.title}>Войти</Text>

              <TextInput style={style.authInput} value={authData.login} />

              <View style={style.passwordWrapper}>
                <TextInput
                  style={{ ...style.authInput, ...style.passwordInp }}
                  value={authData.password}
                />
                <Button style={style.passwordBtn}>Показать</Button>
              </View>

              <Button style={style.submitBtn}>Войти</Button>

              <Button style={style.navBtn}>
                Нет аккаунта? Зарегистрироваться
              </Button>
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
  authInput: {},
  passwordWrapper: {},
  passwordInp: {},
  passwordBtn: {},
  submitBtn: {},
  navBtn: {},
});

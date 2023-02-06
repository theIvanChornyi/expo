import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../redux/auth/authSelectors';
import { LoginScreen } from '../Screens/authScreens/LoginScreen/LoginScreen';
import { RegistrationScreen } from '../Screens/authScreens/RegistrationScreen/RegistrationScreen';
import { Home } from '../Screens/mainScreens/Home';
import { refreshUser } from '../services/firebase/authAPI';

const AuthStack = createNativeStackNavigator();

export const Router = () => {
  const isAuth = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    refreshUser(dispatch);
  }, []);

  return isAuth ? (
    <Home />
  ) : (
    <AuthStack.Navigator
      initialRouteName="login"
      screenOptions={{ headerShown: false }}
    >
      <AuthStack.Screen name="login" component={LoginScreen} />
      <AuthStack.Screen name="register" component={RegistrationScreen} />
    </AuthStack.Navigator>
  );
};

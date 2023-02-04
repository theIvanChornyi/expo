import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import { selectUserStatus } from '../redux/auth/authSelectors';
import { LoginScreen } from '../Screens/authScreens/LoginScreen/LoginScreen';
import { RegistrationScreen } from '../Screens/authScreens/RegistrationScreen/RegistrationScreen';
import { Home } from '../Screens/mainScreens/Home';

const AuthStack = createNativeStackNavigator();

export const Router = () => {
  const isAuth = useSelector(selectUserStatus);
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

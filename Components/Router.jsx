import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoginScreen } from '../Screens/authScreens/LoginScreen/LoginScreen';
import { RegistrationScreen } from '../Screens/authScreens/RegistrationScreen/RegistrationScreen';
import { Home } from '../Screens/mainScreens/Home';

const AuthStack = createNativeStackNavigator();

export const Router = () => {
  return (
    <NavigationContainer>
      <AuthStack.Navigator
        initialRouteName="login"
        screenOptions={{ headerShown: false }}
      >
        <AuthStack.Screen name="login" component={LoginScreen} />
        <AuthStack.Screen name="register" component={RegistrationScreen} />
        <AuthStack.Screen name="home" component={Home} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

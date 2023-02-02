import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoginScreen } from '../Screens/authScreens/LoginScreen/LoginScreen';
import { RegistrationScreen } from '../Screens/authScreens/RegistrationScreen/RegistrationScreen';
import { Home } from '../Screens/mainScreens/Home';

const RootStack = createNativeStackNavigator();

export const Router = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="login"
        screenOptions={{ headerShown: false }}
      >
        <RootStack.Screen name="login" component={LoginScreen} />
        <RootStack.Screen name="register" component={RegistrationScreen} />
        <RootStack.Screen name="home" component={Home} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

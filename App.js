import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoginScreen } from './Screens/authScreens/LoginScreen/LoginScreen';
import { RegistrationScreen } from './Screens/authScreens/RegistrationScreen/RegistrationScreen';
import { Home } from './Screens/mainScreens/Home';

const AuthStack = createNativeStackNavigator();
export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer onLayout={onLayoutRootView}>
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
}

import { createStackNavigator } from '@react-navigation/stack';
import { CloseModalBtn } from '../../../Components/CloseModalBtn/CloseModalBtn';
import { CameraModal } from '../../modals/CameraModal/CameraModal';
import { FilesModal } from '../../modals/FilesModal/FilesModal';
import { RegistrationScreenDefault } from '../../nestedScreens/RegistrationScreenDefault/RegistrationScreenDefault';

const RegistrationRoot = createStackNavigator();

export const RegistrationScreen = () => {
  return (
    <RegistrationRoot.Navigator initialRouteName="registrationScreenDefault">
      <RegistrationRoot.Group>
        <RegistrationRoot.Screen
          name="registrationScreenDefault"
          component={RegistrationScreenDefault}
          options={{ headerShown: false }}
        />
      </RegistrationRoot.Group>
      <RegistrationRoot.Group screenOptions={{ presentation: 'modal' }}>
        <RegistrationRoot.Screen
          name="RegistrationCamera"
          component={CameraModal}
          options={{
            title: 'Создать аватар',
            headerTitleAlign: 'center',
            headerLeft: null,
            headerRight: CloseModalBtn,
          }}
        />
        <RegistrationRoot.Screen
          name="FilesModal"
          options={{
            title: 'Выбрать аватар',
            headerTitleAlign: 'center',
            headerLeft: null,
            headerRight: CloseModalBtn,
          }}
        >
          {prop => <FilesModal path="registrationScreenDefault" {...prop} />}
        </RegistrationRoot.Screen>
      </RegistrationRoot.Group>
    </RegistrationRoot.Navigator>
  );
};

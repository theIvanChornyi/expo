import { createStackNavigator } from '@react-navigation/stack';
import { ProfileDefaultScreen } from '../../nestedScreens/ProfileDefaultScreen/ProfileDefaultScreen';
import { MapScreen } from '../../nestedScreens/MapScreen/MapScreen';
import { CommentsScreen } from '../../nestedScreens/CommentsScreen/CommentsScreen';
import { GoBackBtn } from '../../../Components/GoBackBtn/GoBackBtn';

import { useTabsHide } from '../../../Hooks/useKeyboardStatus/useTabsHide';
import { CameraModal } from '../../modals/CameraModal/CameraModal';
import { FilesModal } from '../../modals/FilesModal/FilesModal';

const ProfileRoot = createStackNavigator();

export const ProfileScreen = ({ navigation, route }) => {
  useTabsHide({ navigation, route });

  return (
    <ProfileRoot.Navigator
      initialRouteName="ProfileDefaultScreen"
      screenOptions={{
        headerStyle: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 0.5 },
          shadowOpacity: 0.3,
          shadowRadius: 0,
        },
      }}
    >
      <ProfileRoot.Group>
        <ProfileRoot.Screen
          name="ProfileDefaultScreen"
          component={ProfileDefaultScreen}
          options={{ headerShown: false }}
        />
        <ProfileRoot.Screen
          name="comments"
          component={CommentsScreen}
          options={{
            title: 'Комментарии',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontFamily: 'Roboto-Bold',
              fontSize: 17,
            },
            headerLeft: GoBackBtn,
          }}
        />
        <ProfileRoot.Screen
          name="map"
          component={MapScreen}
          options={{
            title: 'Место',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontFamily: 'Roboto-Bold',
              fontSize: 17,
            },
            headerLeft: GoBackBtn,
          }}
        />
      </ProfileRoot.Group>
      <ProfileRoot.Group screenOptions={{ presentation: 'modal' }}>
        <ProfileRoot.Screen
          name="ProfileCamera"
          component={CameraModal}
          title="Изменить аватар"
        />

        <ProfileRoot.Screen
          name="FilesModal"
          component={FilesModal}
          title="Выбрать аватар"
        />
      </ProfileRoot.Group>
    </ProfileRoot.Navigator>
  );
};

import { createStackNavigator } from '@react-navigation/stack';
import { CloseModalBtn } from '../../../Components/CloseModalBtn/CloseModalBtn';
import { FilesModal } from '../../modals/FilesModal/FilesModal';
import { CreatePostsScreenDefault } from '../../nestedScreens/CreatePostsScreenDefault/CreatePostsScreenDefault';

const CreatePostRoot = createStackNavigator();

export const CreatePostScreen = () => {
  return (
    <CreatePostRoot.Navigator initialRouteName="CreatePostDefaultScreen">
      <CreatePostRoot.Group>
        <CreatePostRoot.Screen
          name="CreatePostDefaultScreen"
          component={CreatePostsScreenDefault}
          options={{ headerShown: false }}
        />
      </CreatePostRoot.Group>
      <CreatePostRoot.Group screenOptions={{ presentation: 'modal' }}>
        <CreatePostRoot.Screen
          name="FilesModal"
          options={{
            title: 'Выбрать аватар',
            headerTitleAlign: 'center',
            headerLeft: null,
            headerRight: CloseModalBtn,
          }}
        >
          {prop => <FilesModal path="CreatePostDefaultScreen" {...prop} />}
        </CreatePostRoot.Screen>
      </CreatePostRoot.Group>
    </CreatePostRoot.Navigator>
  );
};

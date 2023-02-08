import { createStackNavigator } from '@react-navigation/stack';
import { FilesModal } from '../../modals/FilesModal/FilesModal';
import { CreatePostsScreenDefault } from '../../nestedScreens/CreatePostsScreenDefault/CreatePostsScreenDefault';

const CreatePostRoot = createStackNavigator();

export const CreatePostScreen = ({ navigation, route }) => {
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
          component={param => (
            <FilesModal path="CreatePostDefaultScreen" {...param} />
          )}
          title="Выбрать аватар"
        />
      </CreatePostRoot.Group>
    </CreatePostRoot.Navigator>
  );
};

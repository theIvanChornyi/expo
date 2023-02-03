import { createStackNavigator } from '@react-navigation/stack';
import { PostsDefaultScreen } from '../../nestedScreens/PostsDefaultScreen/PostsDefaultScreen';
import { MapScreen } from '../../nestedScreens/MapScreen/MapScreen';
import { CommentsScreen } from '../../nestedScreens/CommentsScreen/CommentsScreen';
import { LogOutBtn } from '../../../Components/LogOutBtn/LogOutBtn';
import { GoBackBtn } from '../../../Components/GoBackBtn/GoBackBtn';

import { useTabsHide } from '../../../Hooks/useKeyboardStatus/useTabsHide';

const PostsRoot = createStackNavigator();

export const PostsScreen = ({ navigation, route }) => {
  useTabsHide({ navigation, route });

  return (
    <PostsRoot.Navigator
      initialRouteName="defaultScreen"
      screenOptions={{
        headerStyle: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 0.5 },
          shadowOpacity: 0.3,
          shadowRadius: 0,
        },
      }}
    >
      <PostsRoot.Screen
        name="defaultScreen"
        component={PostsDefaultScreen}
        options={props => ({
          title: 'Публикации',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Roboto-Bold',
            fontSize: 17,
          },
          headerLeft: null,
          headerRight: () => (
            <LogOutBtn {...props} style={{ marginRight: 16 }} />
          ),
        })}
      />
      <PostsRoot.Screen
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
      <PostsRoot.Screen
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
    </PostsRoot.Navigator>
  );
};

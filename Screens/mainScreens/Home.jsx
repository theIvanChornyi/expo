import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { PostsScreen } from './PostsScreen/PostsScreen';
import { ProfileScreen } from './ProfileScreen/ProfileScreen';

import { CreatePostTab } from '../../Components/CreatePostTab/CreatePostTab';
import { CreatePostsScreen } from './CreatePostsScreen/CreatePostsScreen';
import { GoBackBtn } from '../../Components/GoBackBtn/GoBackBtn';
import { ProfileTab } from '../../Components/ProfileTab/ProfileTab';
import { PostsTab } from '../../Components/PostsTab/PostsTab';
import { useWindowDimensions } from 'react-native';
import { FilesModal } from '../modals/FilesModal/FilesModal';

const MainTabs = createBottomTabNavigator();

export const Home = () => {
  const { height, width } = useWindowDimensions();

  return (
    <MainTabs.Navigator
      initialRouteName="post"
      backBehavior="history"
      screenOptions={{
        headerStyle: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 0.5 },
          shadowOpacity: 0.3,
          shadowRadius: 0,
        },
        tabBarShowLabel: false,
        tabBarInactiveTintColor: 'none',
        tabBarActiveTintColor: '#000',
      }}
    >
      <MainTabs.Group>
        <MainTabs.Screen
          name="post"
          component={PostsScreen}
          options={{
            headerShown: false,
            tabBarIcon: PostsTab,
          }}
        />
        <MainTabs.Screen
          name="createPost"
          component={CreatePostsScreen}
          options={{
            headerShown: height > width,
            title: 'Создать публикацию',
            headerTitleAlign: 'center',
            headerTitleStyle: { fontFamily: 'Roboto-Bold', fontSize: 17 },
            tabBarStyle: { display: 'none' },
            headerLeft: GoBackBtn,
            tabBarIcon: CreatePostTab,
          }}
        />
        <MainTabs.Screen
          name="profile"
          component={ProfileScreen}
          options={{
            headerShown: false,
            tabBarIcon: ProfileTab,
          }}
        />
      </MainTabs.Group>

      {/* <MainTabs.Group screenOptions={{ presentation: 'modal' }}>
        <MainTabs.Screen
          name="FilesModal"
          component={FilesModal}
          title="Выбрать аватар"
        />
      </MainTabs.Group> */}
    </MainTabs.Navigator>
  );
};

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { LogOutBtn } from '../../Components/LogOutBtn/LogOutBtn';
import { PostsScreen } from './PostsScreen/PostsScreen';
import { ProfileScreen } from './ProfileScreen/ProfileScreen';

import { CreatePostTab } from '../../Components/CreatePostTab/CreatePostTab';
import { CreatePostsScreen } from './CreatePostsScreen/CreatePostsScreen';
import { GoBackBtn } from '../../Components/GoBackBtn/GoBackBtn';
import { ProfileTab } from '../../Components/ProfileTab/ProfileTab';
import { PostsTab } from '../../Components/PostsTab/PostsTab';

const MainTabs = createBottomTabNavigator();

export const Home = () => {
  return (
    <MainTabs.Navigator
      initialRouteName="post"
      backBehavior="history"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarInactiveTintColor: 'none',
        tabBarActiveTintColor: '#000',
        tabBarStyle: {
          paddingTop: 9,
          paddingHorizontal: 82,
          paddingBottom: 34,
          height: 83,
        },
      }}
    >
      <MainTabs.Screen
        name="post"
        component={PostsScreen}
        options={props => ({
          title: 'Публикации',
          headerTitleAlign: 'center',
          headerTitleStyle: { fontFamily: 'Roboto-Bold', fontSize: 17 },

          headerRight: () => <LogOutBtn {...props} />,
          tabBarIcon: () => <PostsTab />,
        })}
      />
      <MainTabs.Screen
        name="createPost"
        component={CreatePostsScreen}
        options={props => ({
          title: 'Создать публикацию',
          headerTitleAlign: 'center',
          headerTitleStyle: { fontFamily: 'Roboto-Bold', fontSize: 17 },
          tabBarStyle: { display: 'none' },
          headerLeft: () => <GoBackBtn {...props} />,
          tabBarIcon: () => <CreatePostTab />,
        })}
      />
      <MainTabs.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => <ProfileTab />,
        }}
      />
    </MainTabs.Navigator>
  );
};

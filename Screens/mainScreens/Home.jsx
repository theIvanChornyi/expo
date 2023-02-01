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
        headerStyle: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 0.5 },
          shadowOpacity: 0.3,
          shadowRadius: 0,
        },
        tabBarShowLabel: false,
        tabBarInactiveTintColor: 'none',
        tabBarActiveTintColor: '#000',
        tabBarStyle: {
          paddingTop: 9,
          paddingHorizontal: 82,
          height: 83,
          paddingBottom: 34,
          ...Platform.select({
            ios: {
              shadowColor: '#000',
              shadowOffset: { width: 0, height: -0.5 },
              shadowOpacity: 0.3,
              shadowRadius: 0,
            },
            android: {
              elevation: 1,
            },
          }),
        },
      }}
    >
      <MainTabs.Screen
        name="post"
        component={PostsScreen}
        options={props => ({
          title: 'Публикации',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Roboto-Bold',
            fontSize: 17,
          },

          headerRight: () => (
            <LogOutBtn {...props} style={{ marginRight: 16 }} />
          ),
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

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { LogOutBtn } from '../../Components/LogOutBtn/LogOutBtn';
import { CreatePostsScreen } from './CreatePostsScreen/CreatePostsScreen';
import { PostsScreen } from './PostsScreen/PostsScreen';
import { ProfileScreen } from './ProfileScreen/ProfileScreen';

import ComentsBtn from '../../img/svg/grid.svg';
import CreatePostBtn from '../../img/svg/union.svg';
import ProfileBtn from '../../img/svg/user.svg';

const MainTabs = createBottomTabNavigator();

export const Home = () => {
  return (
    <MainTabs.Navigator
      initialRouteName="post"
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'none',
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 83,
        },
      }}
    >
      <MainTabs.Screen
        name="post"
        component={PostsScreen}
        options={({ navigation }) => ({
          title: 'Публикации',
          headerTitleAlign: 'center',
          headerTitleStyle: { fontFamily: 'Roboto-Bold', fontSize: 17 },

          headerRight: () => <LogOutBtn navigation={navigation} />,
          tabBarIcon: ({ focused, size, color }) => (
            <ComentsBtn stroke={color} />
          ),
        })}
      />
      <MainTabs.Screen
        name="createPost"
        component={CreatePostsScreen}
        options={({ navigation }) => ({
          title: 'Создать публикацию',
          headerTitleAlign: 'center',
          headerTitleStyle: { fontFamily: 'Roboto-Bold', fontSize: 17 },
          headerRight: () => <LogOutBtn navigation={navigation} />,
          tabBarIcon: ({ focused, size, color }) => (
            <CreatePostBtn fill={color} />
          ),
        })}
      />
      <MainTabs.Screen
        name="profile"
        component={ProfileScreen}
        options={() => ({
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => <ProfileBtn fill={color} />,
        })}
      />
    </MainTabs.Navigator>
  );
};

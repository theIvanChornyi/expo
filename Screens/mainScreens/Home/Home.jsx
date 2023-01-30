import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { CommentsScreen } from '../CommentsScreen/CommentsScreen';
import { CreatePostsScreen } from '../CreatePostsScreen/CreatePostsScreen';
import { MapScreen } from '../MapScreen/MapScreen';
import { PostsScreen } from '../PostsScreen/PostsScreen';
import { ProfileScreen } from '../ProfileScreen/ProfileScreen';

const MainTabs = createBottomTabNavigator();

export const Home = () => {
  return (
    <MainTabs.Navigator>
      <MainTabs.Screen name="post" component={PostsScreen} />
      <MainTabs.Screen name="createPost" component={CreatePostsScreen} />
      <MainTabs.Screen name="profile" component={ProfileScreen} />
    </MainTabs.Navigator>
  );
};

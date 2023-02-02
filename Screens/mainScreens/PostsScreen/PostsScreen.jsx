import { createStackNavigator } from '@react-navigation/stack';
import { PostsDefaultScreen } from '../../nestedScreens/PostsDefaultScreen/PostsDefaultScreen';
import { MapScreen } from '../../nestedScreens/MapScreen/MapScreen';
import { CommentsScreen } from '../../nestedScreens/CommentsScreen/CommentsScreen';

const PostsRoot = createStackNavigator();

export const PostsScreen = () => {
  return (
    <PostsRoot.Navigator
      initialRouteName="defaultScreen"
      screenOptions={{ headerShown: false }}
    >
      <PostsRoot.Screen name="defaultScreen" component={PostsDefaultScreen} />
      <PostsRoot.Screen name="comments" component={CommentsScreen} />
      <PostsRoot.Screen name="map" component={MapScreen} />
    </PostsRoot.Navigator>
  );
};

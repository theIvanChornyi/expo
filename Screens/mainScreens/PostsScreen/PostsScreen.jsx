import { useState } from 'react';
import { Dimensions, FlatList, View } from 'react-native';
import { Post } from '../../../Components/Post/Post';
import { style } from './PostsScreen.styles';

import data from '../../../assets/mockPosts';

export const PostsScreen = () => {
  const [posts, setPosts] = useState(data);

  const height = Dimensions.get('window').height;
  const width = Dimensions.get('window').width;
  return (
    <View style={{ ...style.postsList, height, width }}>
      <FlatList
        data={posts}
        renderItem={({ item }) => <Post {...item} />}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
      />
    </View>
  );
};

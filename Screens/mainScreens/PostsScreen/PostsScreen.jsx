import { useState } from 'react';
import { FlatList, View } from 'react-native';
import { Post } from '../../../Components/Post/Post';
import { style } from './PostsScreen.styles';

import data from '../../../assets/mockPosts';

export const PostsScreen = () => {
  const [posts, setPosts] = useState(data);

  return (
    <View style={style.postsList}>
      <FlatList
        data={posts}
        renderItem={({ item }) => <Post {...item} />}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
      />
    </View>
  );
};

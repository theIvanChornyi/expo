import { useState } from 'react';
import { FlatList, useWindowDimensions, View } from 'react-native';
import { Post } from '../../../Components/Post/Post';
import { style } from './PostsScreen.styles';

import data from '../../../assets/mockPosts';

export const PostsScreen = () => {
  const [posts, setPosts] = useState(data);

  const { height, width } = useWindowDimensions();

  return (
    <View
      style={{
        ...style.postsList,
        width,
        height: height < width ? width : height,
      }}
    >
      <FlatList
        data={posts}
        renderItem={({ item }) => <Post {...item} />}
        keyExtractor={item => item.id}
        ListHeaderComponent={() => (
          <View style={{ height: 32, backgroundColor: '#fff' }} />
        )}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        ListFooterComponent={() => (
          <View style={{ height: 32, backgroundColor: '#fff' }} />
        )}
      />
    </View>
  );
};

import { useState } from 'react';
import { FlatList, View } from 'react-native';
import { Post } from '../../../Components/Post/Post';
import { style } from './PostsScreen.styles';

const data = [
  {
    name: 'Natali Romanova',
    email: 'email@example.com',
    image: require('../../../img/mock/User.png'),
    id: '1',
  },
  {
    name: 'Natali Romanova',
    email: 'email@example.com',
    image: require('../../../img/mock/User.png'),
    id: '2',
  },
  {
    name: 'Natali Romanova',
    email: 'email@example.com',
    image: require('../../../img/mock/User.png'),
    id: '3',
  },
  {
    name: 'Natali Romanova',
    email: 'email@example.com',
    image: require('../../../img/mock/User.png'),
    id: '4',
  },
];

export const PostsScreen = () => {
  const [posts, setPosts] = useState(data);

  return (
    <View style={style.postsList}>
      <FlatList
        style={{ flex: 1, gap: 10 }}
        data={posts}
        renderItem={({ item }) => <Post {...item} />}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
      />
    </View>
  );
};

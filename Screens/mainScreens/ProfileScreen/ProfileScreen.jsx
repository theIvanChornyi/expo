import { useState } from 'react';
import { Dimensions, FlatList, ImageBackground, View } from 'react-native';

import { style } from './ProfileScreen.styles';

import data from '../../../assets/mockPosts';
import { PostBody } from '../../../Components/PostBody/PostBody';
import { PostHeader } from '../../../Components/PostHeader/PostHeader';

export const ProfileScreen = ({ navigation }) => {
  const height = Dimensions.get('window').height;
  const width = Dimensions.get('window').width;

  const [posts, setPosts] = useState(data);

  const [isAdded, setIsAdded] = useState(false);

  const changeAvatar = () => {
    setIsAdded(p => !p);
  };

  return (
    <ImageBackground
      source={require('../../../img/bg/starttBG.jpg')}
      style={{ ...style.background, width, height }}
    >
      <FlatList
        style={{ flex: 1, marginTop: 32 }}
        data={posts}
        ListHeaderComponent={
          <PostHeader {...{ navigation, isAdded, changeAvatar }} />
        }
        renderItem={({ item }) => (
          <PostBody
            image={item.photo}
            title={item.title}
            coments={item.coments}
            likes={item.likes}
            location={item.location}
          />
        )}
        keyExtractor={item => item.id}
        ListFooterComponent={() => (
          <View style={{ height: 126, backgroundColor: '#fff' }} />
        )}
        ItemSeparatorComponent={() => (
          <View style={{ height: 32, backgroundColor: '#fff' }} />
        )}
      />
    </ImageBackground>
  );
};

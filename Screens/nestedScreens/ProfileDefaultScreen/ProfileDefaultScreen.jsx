import { useState } from 'react';
import {
  FlatList,
  ImageBackground,
  useWindowDimensions,
  View,
} from 'react-native';

import { style } from './ProfileDefaultScreen.styles';

import { PostBody } from '../../../Components/PostBody/PostBody';
import { PostHeader } from '../../../Components/PostHeader/PostHeader';

export const ProfileDefaultScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const { height, width } = useWindowDimensions();

  const [isAdded, setIsAdded] = useState(false);

  const changeAvatar = () => {
    setIsAdded(p => !p);
  };

  return (
    <ImageBackground
      source={require('../../../img/bg/starttBG.jpg')}
      style={{
        ...style.background,
        width,
        height: height < width ? width : height,
      }}
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
            id={item.id}
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

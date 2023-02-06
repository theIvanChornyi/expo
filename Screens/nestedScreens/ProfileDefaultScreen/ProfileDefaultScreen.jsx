import { useEffect, useState } from 'react';
import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';

import { style } from './ProfileDefaultScreen.styles';

import { PostBody } from '../../../Components/PostBody/PostBody';
import { PostHeader } from '../../../Components/PostHeader/PostHeader';
import { getOwnFromStorage } from '../../../services/firebase/postsAPI';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/auth/authSelectors';

export const ProfileDefaultScreen = ({ navigation }) => {
  const { uid: id } = useSelector(selectUser);
  const [posts, setPosts] = useState([]);
  const { height, width } = useWindowDimensions();

  const [isAdded, setIsAdded] = useState(false);
  useEffect(() => {
    getOwnFromStorage({ id, callback: setPosts });
  }, []);

  const changeAvatar = () => {
    navigation.navigate('ProfileCamera');
    setIsAdded(p => !p);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require('../../../img/bg/starttBG.jpg')}
        style={{
          ...style.background,
          width,
          height: height < width ? width : height,
        }}
      >
        <FlatList
          style={{ flex: 1, marginTop: 32, minHeight: '100%' }}
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
          ListEmptyComponent={() => (
            <View
              style={{
                flex: 1,
                backgroundColor: '#fff',
                minHeight: '100%',
              }}
            >
              <Text style={{ textAlign: 'center' }}>
                У вас еще нет ни одного поста :(...
              </Text>
            </View>
          )}
          ListFooterComponent={() => (
            <View style={{ height: '100%', backgroundColor: '#fff' }} />
          )}
          ItemSeparatorComponent={() => (
            <View style={{ height: 32, backgroundColor: '#fff' }} />
          )}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

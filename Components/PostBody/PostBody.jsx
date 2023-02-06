import { Image, Text, TouchableOpacity, View } from 'react-native';
import { style } from './PostBody.styles';
import Like from '../../img/svg/like.svg';
import Coment from '../../img/svg/messageCircle.svg';
import Location from '../../img/svg/mapPin.svg';
import { PostBtn } from '../PostBtn/PostBtn';
import { NavigationContext } from '@react-navigation/native';
import { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUserId } from '../../redux/auth/authSelectors';
import { likePostOnStorage } from '../../services/firebase/postsAPI';

export const PostBody = ({
  image,
  title,
  coments = {},
  likes = {},
  place,
  location,
  id,
}) => {
  const navigation = useContext(NavigationContext);
  const userId = useSelector(selectUserId);
  [comentsAmount, setComentsAmount] = useState(0);
  [likesAmount, setLikesAmount] = useState(0);
  useEffect(() => {
    if (likes) {
      setLikesAmount(Object.entries(likes).length);
    }
    if (coments) {
      setComentsAmount(Object.entries(coments).length);
    }
  }, [likes, coments]);

  const like = () => {
    likePostOnStorage(userId);
  };
  return (
    <View style={style.container}>
      <Image source={{ uri: image }} style={{ ...style.picture }} />

      <Text style={style.title}>{title}</Text>

      <View style={style.postWrapper}>
        <View style={style.buttons}>
          <PostBtn
            callback={() => navigation.navigate('comments', { id, image })}
            Icon={Coment}
            text={comentsAmount.toString()}
            style={{ marginRight: 24 }}
          />
          <PostBtn callback={like} Icon={Like} text={likesAmount.toString()} />
        </View>

        <TouchableOpacity
          style={style.location}
          onPress={() => navigation.navigate('map', { location })}
        >
          <Location style={style.locationImage} />
          <Text style={style.locationText}>{place}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

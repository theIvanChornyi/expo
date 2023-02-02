import { Image, Text, TouchableOpacity, View } from 'react-native';
import { style } from './PostBody.styles';
import Like from '../../img/svg/like.svg';
import Coment from '../../img/svg/messageCircle.svg';
import Location from '../../img/svg/mapPin.svg';
import { PostBtn } from '../PostBtn/PostBtn';
import { NavigationContext } from '@react-navigation/native';
import { useContext } from 'react';

export const PostBody = ({ image, title, coments, likes, location }) => {
  const navigation = useContext(NavigationContext);
  return (
    <View style={style.container}>
      <Image source={image} style={{ ...style.picture }} />

      <Text style={style.title}>{title}</Text>

      <View style={style.postWrapper}>
        <View style={style.buttons}>
          <PostBtn
            callback={() => navigation.navigate('comments')}
            Icon={Coment}
            text={coments}
            style={{ marginRight: 24 }}
          />
          <PostBtn callback={console.log} Icon={Like} text={likes} />
        </View>

        <TouchableOpacity
          style={style.location}
          onPress={() => navigation.navigate('map')}
        >
          <Location style={style.locationImage} />
          <Text style={style.locationText}>{location}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

import { Image, Text, TouchableOpacity, View } from 'react-native';
import { style } from './PostBody.styles';
import Like from '../../img/svg/like.svg';
import Coment from '../../img/svg/messageCircle.svg';
import Location from '../../img/svg/mapPin.svg';
import { PostBtn } from '../PostBtn/PostBtn';

export const PostBody = ({ image, title, coments, likes, location }) => {
  return (
    <View style={style.container}>
      <Image source={image} style={{ ...style.picture }} />

      <Text style={style.title}>{title}</Text>

      <View style={style.postWrapper}>
        <View style={style.buttons}>
          <PostBtn Icon={Coment} text={coments} style={{ marginRight: 24 }} />
          <PostBtn Icon={Like} text={likes} />
        </View>

        <TouchableOpacity style={style.location}>
          <Location style={style.locationImage} />
          <Text style={style.locationText}>{location}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

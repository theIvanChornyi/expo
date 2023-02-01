import { Image, Text, View } from 'react-native';

import { style } from './Post.styles';
export const Post = ({ name, image, email }) => {
  return (
    <View style={style.postContainer}>
      <View>
        <Image source={image} style={style.postImage} />
      </View>

      <View style={style.postText}>
        <Text style={style.postName}>{name}</Text>
        <Text style={style.postEmail}>{email}</Text>
      </View>
    </View>
  );
};

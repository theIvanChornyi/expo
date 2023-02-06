import { Image, Text, View } from 'react-native';

import { style } from './PostOwner.styles';
export const PostOwner = ({ name, image, email }) => {
  return (
    <View style={style.postContainer}>
      <View>
        <Image source={{ uri: image }} style={style.postImage} />
      </View>

      <View style={style.postText}>
        <Text style={style.postName}>{name}</Text>
        <Text style={style.postEmail}>{email}</Text>
      </View>
    </View>
  );
};

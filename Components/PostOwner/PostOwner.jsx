import { Image, Text, View } from 'react-native';

import { style } from './PostOwner.styles';
export const PostOwner = ({ name, image, email }) => {
  return (
    <View style={style.postContainer}>
      <View>
        <Image
          style={{
            ...style.postImage,
            width: 60,
            height: 60,
            overflow: 'hidden',
            borderRadius: 16,
          }}
          source={image ? { uri: image } : require('../../img/emptyUser.jpg')}
        />
      </View>

      <View style={style.postText}>
        <Text style={style.postName}>{name}</Text>
        <Text style={style.postEmail}>{email}</Text>
      </View>
    </View>
  );
};

import { Image, Text, TouchableOpacity, View } from 'react-native';

export const PostBody = ({ image, title, coments, likes, location }) => {
  return (
    <View>
      <Image sourse={image} />
      <Text>{title}</Text>
      <View>
        <TouchableOpacity>
          <Image />
          <Text>{coments}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image />
          <Text>{likes}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image />
          {location}
        </TouchableOpacity>
      </View>
    </View>
  );
};

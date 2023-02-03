import { Text, View } from 'react-native';
import { commentStyle } from './Coment.styles';
export const Coment = ({ name, text, data, style }) => {
  return (
    <View style={{ ...commentStyle.commentWrapper, ...style }}>
      <Text style={commentStyle.comment}>{text}</Text>
      <Text style={commentStyle.commentData}>{data}</Text>
    </View>
  );
};

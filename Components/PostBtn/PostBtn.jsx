import { Text, TouchableOpacity } from 'react-native';
import { styleBtn } from './PostBtn.styles';

export const PostBtn = ({
  callback,
  Icon,
  text = '0',
  style,
  isLike = false,
}) => {
  return (
    <TouchableOpacity style={{ ...styleBtn.btn, ...style }} onPress={callback}>
      {<Icon style={styleBtn.image} stroke={isLike ? 'green' : '#FF6C00'} />}
      {text && <Text style={styleBtn.text}>{text}</Text>}
    </TouchableOpacity>
  );
};

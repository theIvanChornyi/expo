import { Text, TouchableOpacity } from 'react-native';
import { styleBtn } from './PostBtn.styles';

export const PostBtn = ({ callback, Icon, text = '0', style }) => {
  return (
    <TouchableOpacity style={{ ...styleBtn.btn, ...style }} onPress={callback}>
      {<Icon style={styleBtn.image} />}
      {text && <Text style={styleBtn.text}>{text}</Text>}
    </TouchableOpacity>
  );
};

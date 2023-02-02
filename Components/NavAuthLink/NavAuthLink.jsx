import { Text, TouchableOpacity } from 'react-native';
import { styleBtn } from './NavAuthLink.styles';

export const NavAuthLink = ({ callback, title, style }) => {
  return (
    <TouchableOpacity
      style={{ ...styleBtn.navBtn, ...style }}
      onPress={callback}
    >
      <Text style={styleBtn.navBtnText}>{title}</Text>
    </TouchableOpacity>
  );
};

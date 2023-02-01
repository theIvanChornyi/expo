import { View } from 'react-native';
import User from '../../img/svg/user.svg';
import { style } from './PostsBtn.styles';

export const ProfileTab = () => {
  return (
    <View style={style.ProfileTab}>
      <User fill="#fff" />
    </View>
  );
};

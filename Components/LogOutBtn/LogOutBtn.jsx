import { TouchableOpacity } from 'react-native';
import LogOut from '../../img/svg/logOut.svg';

export const LogOutBtn = ({ navigation, style }) => {
  return (
    <TouchableOpacity
      style={style}
      onPress={() => navigation.navigate('login')}
    >
      <LogOut />
    </TouchableOpacity>
  );
};

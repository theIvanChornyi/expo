import { TouchableOpacity } from 'react-native';
import LogOut from '../../img/svg/logOut.svg';

import { style } from './LogOutBtn.style';

export const LogOutBtn = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={style.LogOutBtn}
      onPress={() => navigation.navigate('login')}
    >
      <LogOut />
    </TouchableOpacity>
  );
};

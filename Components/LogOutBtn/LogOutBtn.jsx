import { TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import LogOut from '../../img/svg/logOut.svg';
import { logOut } from '../../redux/auth/authSlice';
import { signOutUser } from '../../redux/auth/authThunks';

export const LogOutBtn = ({ navigation, style }) => {
  const dispatch = useDispatch();
  return (
    <TouchableOpacity style={style} onPress={() => dispatch(signOutUser())}>
      <LogOut />
    </TouchableOpacity>
  );
};

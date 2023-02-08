import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Close from '../../img/svg/delete.svg';
export const CloseModalBtn = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{ marginRight: 16 }}
      onPress={() => navigation.goBack()}
    >
      <Close style={{ transform: [{ rotate: '45deg' }] }} />
    </TouchableOpacity>
  );
};

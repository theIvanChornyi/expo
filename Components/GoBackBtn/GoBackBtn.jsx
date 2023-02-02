import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import GoBack from '../../img/svg/arrowLeft.svg';

import { style } from './GoBackBtn.styles';

export const GoBackBtn = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={style.GoBackBtn}
      onPress={() => navigation.goBack()}
    >
      <GoBack stroke="#212121CC" />
    </TouchableOpacity>
  );
};

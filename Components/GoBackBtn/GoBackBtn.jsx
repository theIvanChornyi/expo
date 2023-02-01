import { TouchableOpacity } from 'react-native';
import GoBack from '../../img/svg/arrowLeft.svg';

import { style } from './GoBackBtn.styles';

export const GoBackBtn = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={style.GoBackBtn}
      onPress={() => navigation.goBack(null)}
    >
      <GoBack stroke="#212121CC" />
    </TouchableOpacity>
  );
};

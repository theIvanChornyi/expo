import { styleBtn } from './DeleteBtn.styles';
import Trash from '../../img/svg/trash.svg';
import { TouchableOpacity, View } from 'react-native';

export const DeleteBtn = ({ callBack, style }) => {
  return (
    <TouchableOpacity onPress={callBack}>
      <View style={{ ...styleBtn.deleteBtn, ...style }}>
        <Trash />
      </View>
    </TouchableOpacity>
  );
};

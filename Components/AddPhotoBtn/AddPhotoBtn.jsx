import { TouchableOpacity } from 'react-native';

import Plus from '../../img/svg/add.svg';
import { btnStyle } from './AddPhotoBtn.styles';

export const AddPhotoBtn = ({ changeAvatar, isAdded = false, style }) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={{ ...btnStyle, ...style }}
      onPress={changeAvatar}
    >
      <Plus
        stroke={isAdded ? '#BDBDBD' : '#FF6C00'}
        style={{
          transform: [{ rotate: isAdded ? '45deg' : '0deg' }],
        }}
      />
    </TouchableOpacity>
  );
};

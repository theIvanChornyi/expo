import { TouchableOpacity } from 'react-native';

import Plus from '../../img/svg/add.svg';
import { btnStyle } from './AddPhotoBtn.styles';

export const AddPhotoBtn = ({
  changeAvatar,
  photoURL = '',
  style,
  deletePhoto,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={{ ...btnStyle, ...style }}
      onPress={!photoURL ? changeAvatar : deletePhoto}
    >
      <Plus
        stroke={!photoURL ? '#FF6C00' : '#BDBDBD'}
        style={{
          transform: [{ rotate: !photoURL ? '45deg' : '0deg' }],
        }}
      />
    </TouchableOpacity>
  );
};

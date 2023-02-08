import { TouchableOpacity } from 'react-native';

import Plus from '../../img/svg/add.svg';
import Delete from '../../img/svg/delete.svg';

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
      {!photoURL ? (
        <Plus />
      ) : (
        <Delete fill="#fff" style={{ transform: [{ rotate: '45deg' }] }} />
      )}
    </TouchableOpacity>
  );
};

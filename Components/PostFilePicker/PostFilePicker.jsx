import { Text, TouchableOpacity } from 'react-native';

import { style } from './PostFilePicker.styles';

export const PostFilePicker = ({ isUpload, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={style.imageActionText}>
        {isUpload ? 'Редактировать фото' : 'Загрузите фото'}
      </Text>
    </TouchableOpacity>
  );
};

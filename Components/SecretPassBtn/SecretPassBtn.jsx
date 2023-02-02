import { Text, TouchableOpacity } from 'react-native';
import { styleBtn } from './SecretPassBtn.styles';

export const SecretPassBtn = ({ callback, isHide, style }) => {
  return (
    <TouchableOpacity
      style={{ ...styleBtn.passwordBtn, ...style }}
      activeOpacity={0.4}
      onPress={callback}
    >
      <Text style={styleBtn.passwordBtnText}>
        {isHide ? 'Показать' : 'Скрыть'}
      </Text>
    </TouchableOpacity>
  );
};

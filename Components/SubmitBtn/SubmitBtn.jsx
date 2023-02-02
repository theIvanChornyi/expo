import { Text, TouchableOpacity, View } from 'react-native';
import { styleBtn } from './SubmitBtn.styles';

export const SubmitBtn = ({ title, callback, disabled = false, style }) => {
  if (disabled) {
    return (
      <View
        style={{ ...styleBtn.submitBtn, backgroundColor: '#F6F6F6', ...style }}
      >
        <Text style={{ ...styleBtn.submitBtnText, color: '#BDBDBD' }}>
          {title}
        </Text>
      </View>
    );
  }
  return (
    <TouchableOpacity
      style={{ ...styleBtn.submitBtn, ...style }}
      onPress={callback}
    >
      <Text style={styleBtn.submitBtnText}>{title}</Text>
    </TouchableOpacity>
  );
};

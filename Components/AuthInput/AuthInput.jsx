import { TextInput } from 'react-native';
import { inputStyles } from './AuthInput.styles';

export const AuthInput = ({
  onChangeText,
  onFocus,
  onBlur,
  placeholder,
  keyboardType,
  value,
  activeRule,
  validRule,
  style,
  secureTextEntry,
}) => {
  return (
    <TextInput
      style={{
        ...inputStyles.authInput,
        ...style,
        borderColor: activeRule ? '#FF6C00' : '#E8E8E8',
        color: validRule ? '#212121' : 'red',
      }}
      secureTextEntry={secureTextEntry}
      value={value}
      keyboardType={keyboardType}
      placeholder={placeholder}
      placeholderTextColor="#BDBDBD"
      onChangeText={value => onChangeText(value, 'email')}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};

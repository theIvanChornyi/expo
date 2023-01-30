import { ActivityIndicator, View } from 'react-native';

export const Loader = () => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <ActivityIndicator size="large" color="#FF6C00" />
  </View>
);

import MapView, { Marker } from 'react-native-maps';
import { View } from 'react-native';

import { style } from './MapScreen.styles.js';

export const MapScreen = ({ route }) => {
  const { latitude, longitude } = route.params.location;
  return (
    <View style={style.container}>
      <MapView
        style={style.map}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.001,
          longitudeDelta: 0.006,
        }}
      >
        <Marker coordinate={{ latitude, longitude }} title="travel photo" />
      </MapView>
    </View>
  );
};

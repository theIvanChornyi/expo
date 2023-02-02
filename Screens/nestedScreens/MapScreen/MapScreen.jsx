import MapView, { Marker } from 'react-native-maps';
import { View } from 'react-native';

import { style } from './MapScreen.styles.js';

export const MapScreen = ({}) => {
  return (
    <View style={style.container}>
      <MapView
        style={style.map}
        initialRegion={{
          latitude: 50.516339,
          longitude: 30.602185,
          latitudeDelta: 0.001,
          longitudeDelta: 0.006,
        }}
      >
        <Marker
          coordinate={{ latitude: 50.516339, longitude: 30.602185 }}
          title="travel photo"
        />
      </MapView>
    </View>
  );
};

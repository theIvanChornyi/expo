import { Camera } from 'expo-camera';
import {
  ActivityIndicator,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';

import CameraIco from '../../img/svg/camera.svg';

import { cameraStyle } from './PostCamera.styles';

export const PostCamera = ({
  isLoad,
  isUpload,
  onCameraReady,
  setCamera,
  onPress,
  postData,
}) => {
  const { height, width } = useWindowDimensions();

  return (
    <View>
      {isUpload ? (
        <Image
          style={{
            ...cameraStyle.postImage,
            height: height > width ? 240 : height,
          }}
          source={{ uri: postData?.photo?.uri }}
        />
      ) : (
        <View style={cameraStyle.camera}>
          <Camera
            style={{ height: height > width ? 240 : height }}
            ref={setCamera}
            onCameraReady={onCameraReady}
            onMountError={console.log}
          />
        </View>
      )}

      {isLoad ? (
        <ActivityIndicator
          style={cameraStyle.loader}
          size="large"
          color="#FFFFFF"
        />
      ) : (
        <TouchableOpacity
          onPress={onPress}
          style={{
            ...cameraStyle.cameraContainer,
            opacity: isUpload ? 0.3 : 1,
          }}
        >
          <CameraIco />
        </TouchableOpacity>
      )}
    </View>
  );
};

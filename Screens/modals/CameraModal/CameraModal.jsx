import { Camera, CameraType } from 'expo-camera';
import { useEffect } from 'react';
import { useState } from 'react';
import {
  Image,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import { DeleteBtn } from '../../../Components/DeleteBtn/DeleteBtn';
import { SubmitBtn } from '../../../Components/SubmitBtn/SubmitBtn';
import GoBack from '../../../img/svg/arrowLeft.svg';
import Shot from '../../../img/svg/camera.svg';

import { style } from './CameraModal.styles';

export const CameraModal = ({ navigation, route }) => {
  const { height, width } = useWindowDimensions();
  const [type, setType] = useState(CameraType.back);

  const [isUpload, setIsUpload] = useState(false);
  const [isLoad, setIsLoad] = useState(false);
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);
  const item = route?.params?.item;

  useEffect(() => {
    if (item) {
      setPhoto(item);
      setIsUpload(true);
    }
  }, [item]);

  const createPhoto = async () => {
    if (isLoad) return;

    try {
      setIsLoad(true);
      const shot = await camera.takePictureAsync();
      setPhoto(shot);

      setIsLoad(false);
      setIsUpload(true);
    } catch (error) {
      console.log(e);
    }
  };

  const deletePhoto = () => {
    setPhoto(null);
    setIsUpload(false);
  };

  function toggleCameraType() {
    setType(p => (p === CameraType.back ? CameraType.front : CameraType.back));
  }

  return (
    <View style={{ flex: 1 }}>
      {!isUpload ? (
        <Camera
          type={type}
          style={{ height: '100%' }}
          ref={setCamera}
          onCameraReady={() => setIsLoad(false)}
          onMountError={console.log}
        >
          <View
            style={{
              position: 'absolute',
              top: 0,
              flexDirection: 'row',
              width,
              paddingHorizontal: 16,
              paddingTop: 16,
              justifyContent: 'space-between',
            }}
          >
            <TouchableOpacity
              onPress={toggleCameraType}
              style={{ ...style.controlBtn }}
            >
              <Image
                source={require('../../../img/switchCamera.png')}
                style={{ width: 25, height: 25 }}
              />
            </TouchableOpacity>
          </View>
        </Camera>
      ) : (
        <View style={{ flex: 1 }}>
          <Image
            style={{ flex: 1 }}
            source={{ uri: photo?.uri }}
            resizeMode="contain"
          />
          <View
            style={{
              position: 'absolute',
              top: 0,
              flexDirection: 'row',
              width,
              paddingHorizontal: 16,
              paddingTop: 16,
              justifyContent: 'space-between',
            }}
          >
            <DeleteBtn callBack={deletePhoto} style={{ ...style.controlBtn }} />
            <SubmitBtn callback={console.log} title="Подтвердить" />
          </View>
        </View>
      )}
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          flexDirection: 'row',
          width,
          paddingHorizontal: 16,
          paddingBottom: 16,
          justifyContent: 'space-between',
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack(null)}
          style={{ ...style.controlBtn }}
        >
          <GoBack stroke="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={createPhoto} style={{ ...style.controlBtn }}>
          <Shot />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('FilesModal')}
          style={{ ...style.controlBtn }}
        >
          <Image
            source={require('../../../img/selectFile.png')}
            style={{ width: 25, height: 25 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

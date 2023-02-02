import { useState, useEffect } from 'react';
import { Camera } from 'expo-camera';
import * as Location from 'expo-location';
import * as MediaLibrary from 'expo-media-library';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
  TouchableWithoutFeedback,
  useWindowDimensions,
  View,
} from 'react-native';

import MapPin from '../../../img/svg/mapPin.svg';

import { DeleteBtn } from '../../../Components/DeleteBtn/DeleteBtn';
import { SubmitBtn } from '../../../Components/SubmitBtn/SubmitBtn';
import { useKeyboardStatus } from '../../../Hooks/useKeyboardStatus/useKeyboardStatus';

import { style } from './CreatePostsScreen.styles';
import { PostCamera } from '../../../Components/PostCamera/PostCamera';
import { PostFilePicker } from '../../../Components/PostFilePicker/PostFilePicker';

const initialState = {
  photo: null,
  location: null,
  description: '',
  place: '',
};

export const CreatePostsScreen = ({ navigation }) => {
  const [allowCam, requestAllowCam] = Camera.useCameraPermissions();
  const [allowFile, requestAllowFile] = MediaLibrary.usePermissions();
  const [allowGeo, requestAllowGeo] = Location.useForegroundPermissions();

  useEffect(() => {
    (async () => {
      try {
        await requestAllowCam();
      } catch (error) {
        console.log(e);
      }
    })();

    return () => {
      deletePostData();
    };
  }, []);

  const { height, width } = useWindowDimensions();
  const isShowKeyboard = useKeyboardStatus();

  const [postData, setPostData] = useState(initialState);
  const [camera, setCamera] = useState(null);

  const [isUpload, setIsUpload] = useState(false);
  const [isLoad, setIsLoad] = useState(false);

  const hideKeyborard = () => {
    Keyboard.dismiss();
  };

  const choisePhoto = async () => {
    try {
      await requestAllowFile();
      if (allowFile.granted) {
        const media = await MediaLibrary.getAssetsAsync({
          mediaType: ['photo'],
          first: 30,
        });
        // const video = await MediaLibrary.getAssetInfoAsync(media);
        console.log(media);
      }
    } catch (error) {
      console.log(e);
    }
  };

  const createPhoto = async () => {
    if (isLoad) return;

    try {
      setIsLoad(true);
      const photo = await camera.takePictureAsync();
      setPostData(p => ({ ...p, photo }));
      setIsLoad(false);
      setIsUpload(true);
    } catch (error) {
      console.log(e);
    }
  };

  const deletePhoto = () => {
    setPostData(p => ({ ...p, photo: null }));
    setIsUpload(false);
  };

  const createPost = async () => {
    if (!postData.photo) return;

    try {
      await requestAllowGeo();
      if (allowGeo.granted) {
        const location = await Location.getCurrentPositionAsync({});
        setPostData(p => ({ ...p, location }));
      }
      navigation.navigate('defaultScreen', postData);
      deletePostData();
    } catch (e) {
      console.log(e);
    }
  };

  const deletePostData = () => {
    setPostData(initialState);
    setIsUpload(false);
  };

  return height > width ? (
    <TouchableWithoutFeedback onPress={hideKeyborard} style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'space-between',
        }}
        style={{
          flex: 1,
          backgroundColor: '#fff',
        }}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
          style={{ ...style.container, paddingTop: isShowKeyboard ? 0 : 32 }}
        >
          <PostCamera
            isUpload={isUpload}
            postData={postData}
            isLoad={isLoad}
            onCameraReady={() => setIsLoad(false)}
            setCamera={setCamera}
            onPress={isUpload ? deletePhoto : createPhoto}
          />

          <PostFilePicker
            isUpload={isUpload}
            onPress={isUpload ? deletePhoto : choisePhoto}
          />

          <TextInput
            style={style.descriptionInp}
            value={postData.description}
            placeholder="Название..."
            placeholderTextColor="#BDBDBD"
            onChangeText={v => setPostData(p => ({ ...p, description: v }))}
          />

          <View style={style.locationWrapper}>
            <MapPin style={style.locationIco} />
            <TextInput
              style={style.locationInp}
              value={postData.place}
              placeholder="Местность..."
              placeholderTextColor="#BDBDBD"
              onChangeText={v => setPostData(p => ({ ...p, place: v }))}
            />
          </View>

          <SubmitBtn
            disabled={!postData.photo}
            title={'Опубликовать'}
            callback={createPost}
            style={style.submitBtn}
          />
        </KeyboardAvoidingView>
        <DeleteBtn callBack={deletePostData} style={style.deleteBtn} />
      </ScrollView>
    </TouchableWithoutFeedback>
  ) : (
    <PostCamera
      isUpload={isUpload}
      postData={postData}
      isLoad={isLoad}
      onCameraReady={() => setIsLoad(false)}
      setCamera={setCamera}
      onPress={isUpload ? deletePhoto : createPhoto}
    />
  );
};

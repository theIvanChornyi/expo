import { useState, useEffect } from 'react';
import { Camera } from 'expo-camera';
import * as Location from 'expo-location';
import * as MediaLibrary from 'expo-media-library';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
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

const initialState = {
  photo: null,
  location: null,
  description: '',
  place: '',
};

export const CreatePostsScreen = ({ navigation }) => {
  const [allowCam, requestAllowCam] = Camera.useCameraPermissions();
  const [allowGeo, requestAllowGeo] = Location.useCameraPermissions();
  const [allowFile, requestAllowFile] = MediaLibrary.usePermissions();

  useEffect(() => {
    (async () => {
      try {
        await requestAllowCam();
        await requestLibPermission();
        await requestAllowGeo();
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
  const [isLoad, setIsLoad] = useState(true);

  const hideKeyborard = () => {
    Keyboard.dismiss();
  };

  const createPhoto = async () => {
    if (isLoad) return;

    setIsLoad(true);
    try {
      const photo = await camera.takePictureAsync();
      setPostData(p => ({ ...p, photo }));
      setIsLoad(false);
      setIsUpload(true);
    } catch (error) {
      console.log(e);
    }
  };

  const deletePhoto = () => {
    setPostData(p => ({ ...p, photo: null, location: null }));
    setIsUpload(false);
  };

  const createPost = async () => {
    if (!postData.photo) return;
    try {
      const location = await Location.getCurrentPositionAsync({});
      setPostData(p => ({ ...p, location }));
      navigation.navigate('post', postData);
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

          <Text style={style.imageActionText}>
            {isUpload ? 'Редактировать фото' : 'Загрузите фото'}
          </Text>

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

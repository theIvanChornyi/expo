import { useState } from 'react';
import {
  Dimensions,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  useWindowDimensions,
  View,
} from 'react-native';

import MapPin from '../../../img/svg/mapPin.svg';
import Camera from '../../../img/svg/camera.svg';

import { DeleteBtn } from '../../../Components/DeleteBtn/DeleteBtn';
import { SubmitBtn } from '../../../Components/SubmitBtn/SubmitBtn';
import { useKeyboardStatus } from '../../../Hooks/useKeyboardStatus/useKeyboardStatus';

import { style } from './CreatePostsScreen.styles';

const initialState = {
  description: '',
  location: '',
};

export const CreatePostsScreen = ({ navigate }) => {
  const [postData, setPostData] = useState(initialState);
  const { height, width } = useWindowDimensions();

  const isShowKeyboard = useKeyboardStatus();

  const hideKeyborard = () => {
    Keyboard.dismiss();
  };

  const createPost = () => {
    console.log(postData);
    deletePostData();
  };

  const deletePostData = () => setPostData(initialState);

  return (
    <TouchableWithoutFeedback onPress={hideKeyborard} style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }}
        style={{
          flex: 1,
          backgroundColor: '#fff',
          width,
          height: height < width ? width : height,
        }}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
          style={{ ...style.container, paddingTop: isShowKeyboard ? 0 : 32 }}
        >
          <View style={style.imageWrapper}>
            {false ? (
              <Image style={style.postImage} />
            ) : (
              <View style={style.defaultImage} />
            )}
            <TouchableOpacity
              style={{ ...style.cameraContainer, opacity: true ? 1 : 0.3 }}
            >
              <Camera />
            </TouchableOpacity>
          </View>

          <Text style={style.imageActionText}>
            {false ? 'Редактировать фото' : 'Загрузите фото'}
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
              value={postData.location}
              placeholder="Местность..."
              placeholderTextColor="#BDBDBD"
              onChangeText={v => setPostData(p => ({ ...p, location: v }))}
            />
          </View>

          <SubmitBtn
            title={'Опубликовать'}
            callback={createPost}
            style={style.submitBtn}
          />
        </KeyboardAvoidingView>
        <DeleteBtn callBack={deletePostData} style={style.deleteBtn} />
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

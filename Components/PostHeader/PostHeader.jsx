import { Image, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, avatarUser } from '../../redux/auth/authSelectors';
import { AddPhotoBtn } from '../AddPhotoBtn/AddPhotoBtn';
import { LogOutBtn } from '../LogOutBtn/LogOutBtn';
import { style } from './PostHeader.styles';
import { deleteUserAvatar } from '../../redux/auth/authThunks';

export const PostHeader = ({ navigation }) => {
  const { displayName } = useSelector(selectUser);
  const photoURL = useSelector(avatarUser);
  const dispatch = useDispatch();
  const changeAvatar = async () => {
    navigation.navigate('ProfileCamera');
  };

  const deletePhoto = async () => {
    dispatch(deleteUserAvatar());
  };
  return (
    <View style={style.profileField}>
      <View style={style?.avatar}>
        <Image
          source={
            photoURL ? { uri: photoURL } : require('../../img/emptyUser.jpg')
          }
          style={{
            width: 120,
            height: 120,
            overflow: 'hidden',
            borderRadius: 16,
          }}
        />
        <AddPhotoBtn
          style={{ bottom: 14, right: -25 / 2 }}
          {...{ photoURL, changeAvatar, deletePhoto }}
        />
      </View>
      <LogOutBtn
        style={{
          alignSelf: 'flex-end',
          marginRight: 16,
          marginTop: 22,
        }}
        {...{ navigation }}
      />
      <Text style={style.title}>{displayName}</Text>
    </View>
  );
};

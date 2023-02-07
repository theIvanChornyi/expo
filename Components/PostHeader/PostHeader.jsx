import { Image, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/authSelectors';
import { AddPhotoBtn } from '../AddPhotoBtn/AddPhotoBtn';
import { LogOutBtn } from '../LogOutBtn/LogOutBtn';
import { style } from './PostHeader.styles';

export const PostHeader = ({ isAdded, changeAvatar, navigation }) => {
  const { displayName, photoURL } = useSelector(selectUser);
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
          {...{ isAdded, changeAvatar }}
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

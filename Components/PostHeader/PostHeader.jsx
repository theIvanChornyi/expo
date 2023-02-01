import { Image, Text, View } from 'react-native';
import { AddPhotoBtn } from '../AddPhotoBtn/AddPhotoBtn';
import { LogOutBtn } from '../LogOutBtn/LogOutBtn';
import { style } from './PostHeader.styles';

export const PostHeader = ({ isAdded, changeAvatar, navigation }) => {
  return (
    <View style={style.profileField}>
      <View style={style.avatar}>
        <Image source={require('../../img/mock/Profile.png')} />
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
      <Text style={style.title}>Natali Romanova</Text>
    </View>
  );
};

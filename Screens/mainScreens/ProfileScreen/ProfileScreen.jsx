import { useState } from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import { AddPhotoBtn } from '../../../Components/AddPhotoBtn/AddPhotoBtn';
import { LogOutBtn } from '../../../Components/LogOutBtn/LogOutBtn';
import { useDeviceSize } from '../../../Hooks/useDeviceSize/useDeviceSize';
import { style } from './ProfileScreen.styles';

export const ProfileScreen = ({ navigation }) => {
  const { width, height } = useDeviceSize();
  const [isAdded, setIsAdded] = useState(false);

  const changeAvatar = () => {
    setIsAdded(p => !p);
  };

  return (
    <ImageBackground
      source={require('../../../img/bg/starttBG.jpg')}
      style={{ ...style.background, width, height }}
    >
      <View style={style.profileField}>
        <View style={style.avatar}>
          <Image source={require('../../../img/mock/Profile.png')} />
          <AddPhotoBtn
            style={{ bottom: 14, right: -25 / 2 }}
            {...{ isAdded, changeAvatar }}
          />
        </View>
        <LogOutBtn
          style={{ alignSelf: 'flex-end', marginRight: 16, marginTop: 22 }}
          {...{ navigation }}
        />
        <Text style={style.title}>Natali Romanova</Text>
      </View>
    </ImageBackground>
  );
};

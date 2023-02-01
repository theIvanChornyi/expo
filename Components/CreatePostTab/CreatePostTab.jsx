import { View } from 'react-native';
import CreatePost from '../../img/svg/union.svg';
import { style } from './CreatePostTab.styles';

export const CreatePostTab = () => {
  return (
    <View style={style.CreatePostTab}>
      <CreatePost fill="#fff" />
    </View>
  );
};

import { View } from 'react-native';
import Posts from '../../img/svg/grid.svg';
import { style } from './PostsTab.styles';

export const PostsTab = () => {
  return (
    <View style={style.PostsTab}>
      <Posts />
    </View>
  );
};

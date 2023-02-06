import moment from 'moment/moment';
import { Text, View } from 'react-native';
import { commentStyle } from './Coment.styles';
import 'moment/locale/ru';
export const Coment = ({ text, data, style }) => {
  return (
    <View style={{ ...commentStyle.commentWrapper, ...style }}>
      <Text style={commentStyle.comment}>{text.text}</Text>
      <Text style={commentStyle.commentData}>
        {moment(data).locale('ru').format('D MMMM [,] YYYY [|] h:mm')}
      </Text>
    </View>
  );
};

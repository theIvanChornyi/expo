import { useEffect, useState } from 'react';
import { FlatList, Image, TextInput, View } from 'react-native';

import {
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import { Coment } from '../../../Components/Coment/Coment';
import {
  AddComentToStorage,
  getComentsFromStorage,
} from '../../../services/firebase/postsAPI';

import SendArrow from '../../../img/svg/Vector.svg';

import { style } from './CommentsScreen.styles';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/auth/authSelectors';
export const CommentsScreen = ({ route }) => {
  const [coments, setComents] = useState([]);
  const { id, image } = route.params;
  const { uid, displayName, photoURL } = useSelector(selectUser);
  const { height, width } = useWindowDimensions();
  const [text, setText] = useState('');

  useEffect(() => {
    getComentsFromStorage({ id });
  }, []);

  const sendComment = () => {
    AddComentToStorage({
      id,
      coment: {
        text,
        data: Date.now(),
        owner: { id: uid, name: displayName, avatar: photoURL },
      },
    });
  };

  return (
    <KeyboardAvoidingView
      style={{
        ...style.container,
        width,
        height: height < width ? width : height,
      }}
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
    >
      <FlatList
        data={coments}
        style={style.list}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => {
          const isEven = index % 2 === 0;
          return (
            <View style={{ flexDirection: !isEven ? 'row' : 'row-reverse' }}>
              <Coment
                {...item}
                style={{
                  borderTopEndRadius: isEven ? 6 : 0,
                  borderTopStartRadius: !isEven ? 6 : 0,
                }}
              />
              <View
                style={{
                  marginLeft: !isEven ? 16 : 0,
                  marginRight: isEven ? 16 : 0,
                }}
              >
                <Image source={item.avatar} />
              </View>
            </View>
          );
        }}
        ListHeaderComponent={() => (
          <Image
            source={{ uri: image }}
            style={{ alignSelf: 'center', marginVertical: 32 }}
          />
        )}
        ListFooterComponent={() => (
          <View style={{ height: 21, backgroundColor: '#fff' }} />
        )}
        ItemSeparatorComponent={() => (
          <View style={{ height: 24, backgroundColor: '#fff' }} />
        )}
      />
      <View
        style={{
          ...style.inputWrapper,
          marginBottom: 16,
        }}
      >
        <TextInput
          style={style.input}
          value={text}
          placeholder="Комментировать..."
          placeholderTextColor="#BDBDBD"
          onChangeText={v => setText(p => ({ ...p, text: v }))}
          // onFocus={() => setActiveField('email')}
          // onBlur={() => setActiveField('')}
        />
        <TouchableOpacity style={style.sendBtn} onPress={sendComment}>
          <SendArrow fill={'#fff'} />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

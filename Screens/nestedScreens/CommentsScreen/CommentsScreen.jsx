import { useEffect, useRef, useState } from 'react';
import { FlatList, Image, Keyboard, Text, TextInput, View } from 'react-native';
import { useKeyboardStatus } from '../../../Hooks/useKeyboardStatus/useKeyboardStatus';
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
  const isShowKeyboard = useKeyboardStatus();

  const [coments, setComents] = useState([]);
  const { id, image } = route.params;
  const { uid, displayName, photoURL } = useSelector(selectUser);
  const { height, width } = useWindowDimensions();
  const [text, setText] = useState('');

  useEffect(() => {
    getComentsFromStorage({ id, callback: setComents });
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
    setText('');
    Keyboard.dismiss();
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
          const itsMe = uid !== item.owner.id;
          return (
            <View style={{ flexDirection: !itsMe ? 'row' : 'row-reverse' }}>
              <Coment
                {...item}
                style={{
                  borderTopEndRadius: itsMe ? 6 : 0,
                  borderTopStartRadius: !itsMe ? 6 : 0,
                }}
              />
              <View
                style={{
                  marginLeft: !itsMe ? 16 : 0,
                  marginRight: itsMe ? 16 : 0,
                }}
              >
                <Image
                  style={{
                    height: 28,
                    width: 28,
                    overflow: 'hidden',
                    borderRadius: 100,
                  }}
                  source={
                    item?.owner?.avatar
                      ? { uri: item.owner.avatar }
                      : require('../../../img/emptyUser.jpg')
                  }
                />
              </View>
            </View>
          );
        }}
        ListHeaderComponent={() => (
          <Image source={{ uri: image }} style={style.listHeader} />
        )}
        ListFooterComponent={() => (
          <View style={{ height: 21, backgroundColor: '#fff' }} />
        )}
        ListEmptyComponent={() => (
          <View
            style={{
              height: '100%',
              flex: 1,
              backgroundColor: '#fff',
            }}
          >
            <Text style={{ textAlign: 'center' }}>
              ???????????????? ???????? ????????????????????!
            </Text>
          </View>
        )}
        ItemSeparatorComponent={() => (
          <View style={{ height: 24, backgroundColor: '#fff' }} />
        )}
      />
      <View
        style={{
          ...style.inputWrapper,
          marginBottom: isShowKeyboard ? 100 : 16,
        }}
      >
        <TextInput
          style={style.input}
          value={text}
          placeholder="????????????????????????????..."
          placeholderTextColor="#BDBDBD"
          onChangeText={v => setText(p => ({ ...p, text: v }))}
        />
        <TouchableOpacity style={style.sendBtn} onPress={sendComment}>
          <SendArrow fill={'#fff'} />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

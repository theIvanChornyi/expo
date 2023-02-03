import {
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import { FlatList, Image, Text, TextInput, View } from 'react-native';
import data from '../../../assets/mockComments';
import { Coment } from '../../../Components/Coment/Coment';
import { useKeyboardStatus } from '../../../Hooks/useKeyboardStatus/useKeyboardStatus';

import SendArrow from '../../../img/svg/Vector.svg';

import { style } from './CommentsScreen.styles';
export const CommentsScreen = () => {
  const isShowKeyboard = useKeyboardStatus();
  const { height, width } = useWindowDimensions();

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
        data={data}
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
            source={require('../../../img/mock/post2.png')}
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
          // value={authData.email}
          placeholder="Комментировать..."
          placeholderTextColor="#BDBDBD"
          // onChangeText={value => setAuthData(p => ({ ...p, email: value }))}
          // onFocus={() => setActiveField('email')}
          // onBlur={() => setActiveField('')}
        />
        <TouchableOpacity style={style.sendBtn}>
          <SendArrow fill={'#fff'} />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import * as MediaLibrary from 'expo-media-library';

import { style } from './FilesModal.styles';
import { useEffect, useState } from 'react';

export const FilesModal = ({ navigation, route, path }) => {
  const [allowFile, requestAllowFile] = MediaLibrary.usePermissions();
  const [files, setFiles] = useState(null);
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    (async () => {
      try {
        const resp = await requestAllowFile();

        if (resp.granted) {
          const media = await MediaLibrary.getAssetsAsync({
            mediaType: ['photo'],
            first: 30,
          });
          setFiles(media?.assets);
        }
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <FlatList
      data={files}
      contentContainerStyle={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
      style={{
        paddingHorizontal: 5 / 2,
        paddingVertical: 5 / 2,
        backgroundColor: '#fff',
      }}
      horizontal={false}
      numColumns={4}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
            navigation.navigate(path, { item });
          }}
        >
          <View
            style={{
              marginHorizontal: 5 / 2,
              marginVertical: 5 / 2,
              borderColor: '#F6F6F6',
              borderStyle: 'solid',
              borderWidth: 1,
              borderRadius: 6,
              overflow: 'hidden',
            }}
          >
            <Image
              resizeMode="contain"
              style={{ height: height / 4, width: width / 4 - 10 }}
              source={{ uri: item.uri }}
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

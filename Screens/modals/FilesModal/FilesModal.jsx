import { FlatList, Image, Text, TouchableOpacity } from 'react-native';
import * as MediaLibrary from 'expo-media-library';

import { style } from './FilesModal.styles';
import { useEffect, useState } from 'react';

export const FilesModal = ({ navigation, route }) => {
  const [allowFile, requestAllowFile] = MediaLibrary.usePermissions();
  const [files, setFiles] = useState(null);

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
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
            navigation.navigate('ProfileCamera', { item });
          }}
        >
          <Image style={{ height: 75, width: 75 }} source={{ uri: item.uri }} />
        </TouchableOpacity>
      )}
    />
  );
};

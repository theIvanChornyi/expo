import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import 'react-native-get-random-values';
import uuid from 'react-native-uuid';

import { storage } from './config';
import { blobPhoto } from '../../helpers/blobPhoto';

export const sendPhotoToStorage = async (uri, path) => {
  const id = uuid.v4();
  const photo = await blobPhoto(uri);
  const { metadata } = await uploadBytes(ref(storage, `${path}/${id}`), photo);
  return await getDownloadURL(ref(storage, metadata.fullPath));
};

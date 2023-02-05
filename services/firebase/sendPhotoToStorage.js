import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { nanoid } from 'nanoid';

import { storage } from './config';
import { blobPhoto } from '../../helpers/blobPhoto';

export const sendPhotoToStorage = async (uri, path) => {
  const photo = await blobPhoto(uri);
  const { metadata } = await uploadBytes(
    ref(storage, `${path}/${nanoid()}`),
    photo
  );
  return await getDownloadURL(ref(storage, metadata.fullPath));
};

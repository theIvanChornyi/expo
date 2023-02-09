import {
  doc,
  setDoc,
  collection,
  onSnapshot,
  query,
  where,
  updateDoc,
  arrayUnion,
  arrayRemove,
  orderBy,
} from 'firebase/firestore';
import 'react-native-get-random-values';
import uuid from 'react-native-uuid';

import { db } from './config';

export const writePostToStorage = async ({
  owner = {},
  photo = '',
  title = '',
  coments = [],
  likes = [],
  location = {},
  place = '',
}) => {
  const id = uuid.v1();
  return await setDoc(doc(db, 'posts', `${title + id}`), {
    owner,
    ownerId: owner.id,
    photo,
    title,
    coments,
    likes,
    location,
    place,
    timeStamp: Date.now(),
  });
};

export const AddComentToStorage = async ({ id, coment }) => {
  const comentId = uuid.v1();
  await updateDoc(doc(db, `posts/${id}/`), {
    coments: arrayUnion({ ...coment, id: comentId }),
  });
};

export const getPostsFromStorage = async callback => {
  const q = query(collection(db, 'posts'), orderBy('timeStamp', 'desc'));
  onSnapshot(q, docs => {
    callback(docs.docs.map(doc => ({ ...doc?.data(), id: doc.id })));
  });
};

export const getOwnFromStorage = async ({ id, callback }) => {
  const q = query(collection(db, 'posts'), where('ownerId', '==', id));

  onSnapshot(q, docs => {
    callback(
      docs.docs
        .map(doc => ({ ...doc?.data(), id: doc.id }))
        .sort((a, b) => a.timeStamp > b.timeStamp)
    );
  });
};

export const getComentsFromStorage = async ({ callback, id }) => {
  onSnapshot(doc(db, 'posts', id), doc => {
    callback(doc?.data().coments);
  });
};

export const likePostOnStorage = async ({ id, userId }) => {
  await updateDoc(doc(db, `posts/${id}/`), {
    likes: arrayUnion(userId),
  });
};

export const unLikePostfromStorage = async ({ id, userId }) => {
  await updateDoc(doc(db, `posts/${id}/`), {
    likes: arrayRemove(userId),
  });
};

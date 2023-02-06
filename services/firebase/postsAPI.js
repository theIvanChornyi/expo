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
} from 'firebase/firestore';
import { nanoid } from 'nanoid';

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
  return await setDoc(doc(db, 'posts', `${title + nanoid()}`), {
    owner,
    ownerId: owner.id,
    photo,
    title,
    coments,
    likes,
    location,
    place,
  });
};

export const AddComentToStorage = async ({ id, coment }) => {
  await updateDoc(doc(db, `posts/${id}/`), {
    coment: arrayUnion(coment),
  });
};

export const getPostsFromStorage = async callback => {
  onSnapshot(collection(db, 'posts'), docs => {
    callback(docs.docs.map(doc => ({ ...doc.data(), id: doc.id })));
  });
};

export const getOwnFromStorage = async ({ id, callback }) => {
  const q = query(collection(db, 'posts'), where('ownerId', '==', id));

  onSnapshot(q, docs => {
    callback(docs.docs.map(doc => ({ ...doc.data(), id: doc.id })));
  });
};

export const getComentsFromStorage = async ({ callback, id }) => {
  const q = query(collection(db, `posts/${id}/coments`));
  onSnapshot(q, docs => {
    console.log(docs.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    callback(docs.docs.map(doc => ({ ...doc.data(), id: doc.id })));
  });
};

export const likePostOnStorage = async id => {
  await updateDoc(doc(db, `posts/${id}/`), {
    likes: arrayUnion(id),
  });
};

export const unLikePostfromStorage = async id => {
  await updateDoc(doc(db, `posts/${id}/`), {
    likes: arrayRemove(id),
  });
};

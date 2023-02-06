import { onValue, ref, set, update, push } from 'firebase/database';
import { nanoid } from 'nanoid';
import { transformFirebaseSnapshot } from '../../helpers/transformFirebaseSnapshot';
import { database } from './config';

export const writePostToStorage = async ({
  owner = {},
  photo = '',
  title = '',
  coments = [],
  likes = [],
  location = {},
  place = '',
}) => {
  return await set(ref(database, 'Posts/' + title + nanoid()), {
    owner,
    photo,
    title,
    coments,
    likes,
    location,
    place,
  });
};

export const AddComentToStorage = async ({ id, coment }) => {
  await push(ref(database, 'Posts/' + id + '/coments'), coment);
};

export const getPostsFromStorage = async callback => {
  const starCountRef = ref(database, 'Posts/');
  onValue(starCountRef, snapshot => {
    callback(transformFirebaseSnapshot(snapshot));
  });
};

export const getComentsFromStorage = async ({ callback, id }) => {
  const starCountRef = ref(database, 'Posts/' + id + '/coments');
  onValue(starCountRef, snapshot => {
    console.log(transformFirebaseSnapshot(snapshot));
  });
};

export const likePostOnStorage = async id => {
  await push(ref(database, 'Posts/' + id + '/likes'), id);
};

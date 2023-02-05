import { onValue, ref, set } from 'firebase/database';
import { nanoid } from 'nanoid';
import { transformFirebaseSnapshot } from '../../helpers/transformFirebaseSnapshot';
import { database } from './config';

export const writePostToStorage = async ({
  owner = {},
  photo = '',
  title = '',
  coments = [],
  likes = 0,
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

export const getPostsFromStorage = async callback => {
  const starCountRef = ref(database, 'Posts/');
  onValue(starCountRef, snapshot => {
    console.log(transformFirebaseSnapshot(snapshot));
  });
};

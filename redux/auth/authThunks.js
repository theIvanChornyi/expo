import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { authFirebase, storage } from '../../services/firebase/config';
import { ref, deleteObject } from 'firebase/storage';
import { sendPhotoToStorage } from '../../services/firebase/sendPhotoToStorage';

export const signUpUser = createAsyncThunk('auth/createNewUser', async data => {
  try {
    const auth = authFirebase;

    await createUserWithEmailAndPassword(auth, data?.email, data?.password);

    let link = '';
    if (data.photo) {
      link = await sendPhotoToStorage(data.photo, 'AvatarPhoto');
    }
    await updateProfile(auth.currentUser, {
      displayName: data.login,
      photoURL: link,
    });

    return auth.currentUser;
  } catch (e) {
    console.log(e);
  }
});

export const signInUser = createAsyncThunk('auth/login', async data => {
  try {
    const auth = authFirebase;
    const { user } = await signInWithEmailAndPassword(
      auth,
      data?.email,
      data?.password
    );
    return user;
  } catch (e) {
    console.log(e);
  }
});

export const signOutUser = createAsyncThunk('auth/logOut', async () => {
  try {
    const auth = authFirebase;
    await signOut(auth);
  } catch (e) {
    console.log(e);
  }
});

export const changeUserAvatar = createAsyncThunk(
  'auth/changeUserAvatar',
  async photoURL => {
    try {
      const auth = authFirebase;
      await updateProfile(auth.currentUser, {
        photoURL,
      });

      const {
        auth: { currentUser },
      } = auth.currentUser;
      return currentUser;
    } catch (e) {
      console.log(e);
    }
  }
);

export const deleteUserAvatar = createAsyncThunk(
  'auth/deleteUserAvatar',
  async () => {
    try {
      const auth = authFirebase;
      const desertRef = ref(storage, auth?.currentUser?.photoURL);
      await deleteObject(desertRef);
      await updateProfile(auth.currentUser, {
        photoURL: '',
      });

      const {
        auth: { currentUser },
      } = auth.currentUser;
      return currentUser;
    } catch (e) {
      console.log(e);
    }
  }
);

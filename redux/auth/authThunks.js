import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { authFirebase } from '../../services/firebase/config';

export const signUpUser = createAsyncThunk(
  'auth/createNewUser',
  async (data, thunkAPI) => {
    const auth = authFirebase;
    await createUserWithEmailAndPassword(auth, data?.email, data?.password);
    await updateProfile(auth.currentUser, {
      displayName: data.login,
      photoURL: '',
    });

    return auth.currentUser;
  }
);

export const signInUser = createAsyncThunk(
  'auth/login',
  async (data, thunkAPI) => {
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
  }
);

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
  async (photoURL, thunkAPI) => {
    const auth = authFirebase;
    await updateProfile(auth.currentUser, {
      photoURL,
    });

    const {
      auth: { currentUser },
    } = auth.currentUser;
    return currentUser;
  }
);

export const deleteUserAvatar = createAsyncThunk(
  'auth/deleteUserAvatar',
  async () => {
    const auth = authFirebase;
    await updateProfile(auth.currentUser, {
      photoURL: '',
    });

    const {
      auth: { currentUser },
    } = auth.currentUser;
    return currentUser;
  }
);

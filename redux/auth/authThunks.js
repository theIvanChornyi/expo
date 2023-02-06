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
    try {
      await createUserWithEmailAndPassword(auth, data?.email, data?.password);
      await updateProfile(auth.currentUser, {
        displayName: data.login,
        photoURL: 'https://example.com/jane-q-user/profile.jpg',
      });

      return auth.currentUser;
    } catch (e) {
      console.log(e);
    }
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

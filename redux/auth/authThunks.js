import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { authFirebase } from '../../services/firebase/config';
import { setUser } from './authSlice';

export const signUpUser = createAsyncThunk(
  'auth/createNewUser',
  async (data, thunkAPI) => {
    const auth = authFirebase;
    try {
      const { user } = await createUserWithEmailAndPassword(
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

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (userId, thunkAPI) => {
    try {
      const auth = authFirebase;
      onAuthStateChanged(auth, user => {
        if (user) {
          thunkAPI.dispatch(setUser(user));
        }
      });
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

import { createAsyncThunk } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { authFirebase } from '../../services/firebase/config';

export const signUpUser = createAsyncThunk(
  'auth/createNewUser',
  async (data, thunkAPI) => {
    const auth = authFirebase;
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        data?.email,
        data?.password
      );
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }
);

export const signInUser = createAsyncThunk(
  'auth/login',
  async (userId, thunkAPI) => {}
);

export const signOut = createAsyncThunk(
  'auth/logout',
  async (userId, thunkAPI) => {}
);

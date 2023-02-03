import { createAsyncThunk } from '@reduxjs/toolkit';

export const signUpUser = createAsyncThunk(
  'auth/createNewUser',
  async (userId, thunkAPI) => {
    // const response = await userAPI.fetchById(userId);
    // return response.data;
  }
);

export const signInUser = createAsyncThunk(
  'auth/login',
  async (userId, thunkAPI) => {
    // const response = await userAPI.fetchById(userId);
    // return response.data;
  }
);

export const signOut = createAsyncThunk(
  'auth/logout',
  async (userId, thunkAPI) => {
    // const response = await userAPI.fetchById(userId);
    // return response.data;
  }
);

import { createSlice } from '@reduxjs/toolkit';
import { signInUser, signOut, signUpUser } from './authThunks';

const initialState = {
  id: null,
  name: null,
  user: null,
  isAuth: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder => {
    builder.addCase(signUpUser.pending, (state, action) => {});
    builder.addCase(signUpUser.fulfilled, (state, action) => {});
    builder.addCase(signUpUser.rejected, (state, action) => {});

    builder.addCase(signInUser.pending, (state, action) => {});
    builder.addCase(signInUser.fulfilled, (state, action) => {});
    builder.addCase(signInUser.rejected, (state, action) => {});

    builder.addCase(signOut.pending, (state, action) => {});
    builder.addCase(signOut.fulfilled, (state, action) => {});
    builder.addCase(signOut.rejected, (state, action) => {});
  },
});

export const authReducer = authSlice.reducer;

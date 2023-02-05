import { createSlice } from '@reduxjs/toolkit';
import { signInUser, signOut, signOutUser, signUpUser } from './authThunks';

const initialState = {
  id: null,
  user: null,
  isAuth: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut: () => ({ ...initialState }),
    setUser: (state, action) => {
      state.id = action.payload.uid;
      state.user = action.payload;
      state.isAuth = true;
    },
  },

  extraReducers: builder => {
    builder.addCase(signUpUser.pending, (state, action) => {});
    builder.addCase(signUpUser.fulfilled, (state, action) => {
      state.id = action.payload.uid;
      state.user = action.payload;
      state.isAuth = true;
    });
    builder.addCase(signUpUser.rejected, (state, action) => {});

    builder.addCase(signInUser.pending, (state, action) => {});
    builder.addCase(signInUser.fulfilled, (state, action) => {
      state.id = action.payload.uid;
      state.user = action.payload;
      state.isAuth = true;
    });
    builder.addCase(signInUser.rejected, (state, action) => {});

    builder.addCase(signOutUser.pending, (state, action) => {});
    builder.addCase(signOutUser.fulfilled, () => ({ ...initialState }));
    builder.addCase(signOutUser.rejected, (state, action) => {});
  },
});

export const { logOut, setUser } = authSlice.actions;
export const authReducer = authSlice.reducer;

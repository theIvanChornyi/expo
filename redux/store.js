import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { authReducer } from './auth/authSlice';

export const store = configureStore({
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: { auth: authReducer },
});

export const ReduxProvider = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { authReducer } from './auth/authSlice';

export const store = configureStore({
  reducer: { auth: authReducer },
});

export const ReduxProvider = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

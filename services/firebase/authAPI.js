import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { setUser } from '../../redux/auth/authSlice';
import { authFirebase } from './config';

export const refreshUser = dispatch => {
  try {
    const auth = authFirebase;
    onAuthStateChanged(auth, user => {
      if (user) {
        dispatch(setUser(user));
      }
    });
  } catch (e) {
    console.log(e);
  }
};

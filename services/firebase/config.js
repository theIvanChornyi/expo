import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAvP6wctuEBR-Lbv3_s9uK5pA_GV1ZhF2w',
  authDomain: 'native-39514.firebaseapp.com',
  databaseURL:
    'https://native-39514-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'native-39514',
  storageBucket: 'native-39514.appspot.com',
  messagingSenderId: '127035074941',
  appId: '1:127035074941:web:b55ea76ce448bfd2a60414',
};

export const app = initializeApp(firebaseConfig);
export const authFirebase = getAuth(app);

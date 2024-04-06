
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyDFVi3Dxu-5g88zlCP64N_4-if6jhvje3M',
  authDomain: 'vision-vue-e32de.firebaseapp.com',
  projectId: 'vision-vue-e32de',
  storageBucket: 'vision-vue-e32de.appspot.com',
  messagingSenderId: '380629012270',
  appId: '1:380629012270:web:7444224b76d98da34334bf',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
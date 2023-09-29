// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import toast from 'react-hot-toast';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAtkOiYI31kGkYXD7HxZFJg7kSyTQLoGF8',
  authDomain: 'react-bookshelf-acd1e.firebaseapp.com',
  projectId: 'react-bookshelf-acd1e',
  storageBucket: 'react-bookshelf-acd1e.appspot.com',
  messagingSenderId: '813900016170',
  appId: '1:813900016170:web:5dba5977d710bb1ab6b153',
  measurementId: 'G-J53P60KM41',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export async function userSignUp(username, email, password) {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, { displayName: username });
  } catch (e) {
    if (e.code === 'auth/invalid-email') {
      toast.error('Invalid email. Please try again!');
      return;
    } else if (e.code === 'auth/weak-password') {
      toast.error('Weak password. Please try again!');
      return;
    } else if (e.code === 'auth/email-already-in-use') {
      toast.error('Email is already in use. Please try again!');
      return;
    } else {
      console.log(e);
      return;
    }
  }
}

export async function userSignIn(email, password) {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
  }
}

export async function userSignOut() {
  signOut(auth);
}

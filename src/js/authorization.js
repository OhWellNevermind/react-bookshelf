// Import the functions you need from the SDKs you need
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import toast from 'react-hot-toast';
import { app } from './firebase';

// Initialize Firebase
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
      return;
    }
  }
}

export async function userSignIn(email, password) {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    if (e.code === 'auth/invalid-email') {
      toast.error('Invalid email. Please try again!');
      return;
    } else if (e.code === 'auth/wrong-password') {
      toast.error('Wrong password. Please try again!');
      return;
    } else if (e.code === 'auth/invalid-login-credentials') {
      toast.error('Invalid email. Please try again!');
      return;
    } else {
      return;
    }
  }
}

export async function userSignOut() {
  signOut(auth);
}

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

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
  databaseURL:
    'https://react-bookshelf-acd1e-default-rtdb.europe-west1.firebasedatabase.app',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

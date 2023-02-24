// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_qxdYVv7jTr4H_UBPzY0UC27FiDF_Bho",
  authDomain: "commerce-46a8e.firebaseapp.com",
  projectId: "commerce-46a8e",
  storageBucket: "commerce-46a8e.appspot.com",
  messagingSenderId: "736346432641",
  appId: "1:736346432641:web:56ef5c06c34a63d8959980"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
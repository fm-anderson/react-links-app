// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore"; // Firestore
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoSc6s9Ol1ZivJuJvy6aJghzHVtxk8dWw",
  authDomain: "react-links-app.firebaseapp.com",
  projectId: "react-links-app",
  storageBucket: "react-links-app.appspot.com",
  messagingSenderId: "129298627028",
  appId: "1:129298627028:web:9ec364c55791e8625d7e41",
  measurementId: "G-L2K9P4DKY8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
export const auth = getAuth(app);
export const signIn = signInWithEmailAndPassword;
export const signUp = createUserWithEmailAndPassword;

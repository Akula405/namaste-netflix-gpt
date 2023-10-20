// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4hXfMji1kw5npdALU2tpL_WnFm_C_g7U",
  authDomain: "mynetflixgpt-88e0b.firebaseapp.com",
  projectId: "mynetflixgpt-88e0b",
  storageBucket: "mynetflixgpt-88e0b.appspot.com",
  messagingSenderId: "57430702502",
  appId: "1:57430702502:web:7a2ff66fa3e3c1c3d6f767",
  measurementId: "G-36R67PYCRK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

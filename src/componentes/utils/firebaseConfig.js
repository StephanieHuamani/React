// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "libreriasmile-4306e.firebaseapp.com",
  projectId: "libreriasmile-4306e",
  storageBucket: "libreriasmile-4306e.appspot.com",
  messagingSenderId: "305362209077",
  appId: "1:305362209077:web:5a4bf5b54dcf8dad5a647c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
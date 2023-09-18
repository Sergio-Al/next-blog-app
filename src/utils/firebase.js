// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "next-blog-dec5e.firebaseapp.com",
  projectId: "next-blog-dec5e",
  storageBucket: "next-blog-dec5e.appspot.com",
  messagingSenderId: "507360737688",
  appId: "1:507360737688:web:f078ed2551f899ec1c53ed",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-36d9f.firebaseapp.com",
  projectId: "mern-blog-36d9f",
  storageBucket: "mern-blog-36d9f.appspot.com",
  messagingSenderId: "15544588044",
  appId: "1:15544588044:web:c29000b8db37765d491b29",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

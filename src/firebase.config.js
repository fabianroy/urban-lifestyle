// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqNXjBsrSNEXxbLvG_XQw1SHFTCjgVx2Q",
  authDomain: "urban-lifestyle-bd.firebaseapp.com",
  projectId: "urban-lifestyle-bd",
  storageBucket: "urban-lifestyle-bd.appspot.com",
  messagingSenderId: "1088680608061",
  appId: "1:1088680608061:web:415cc47efe4a3e25fb8554"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
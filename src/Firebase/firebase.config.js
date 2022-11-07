// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBc61l00T8sf_gF9UYOm132xY2JBJ3fAEI",
  authDomain: "armans-kitchen.firebaseapp.com",
  projectId: "armans-kitchen",
  storageBucket: "armans-kitchen.appspot.com",
  messagingSenderId: "186747549882",
  appId: "1:186747549882:web:6c724d5fbb8f0962d06a83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
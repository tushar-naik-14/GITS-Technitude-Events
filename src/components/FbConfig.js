// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMJxOso9SclZCA9E4mVqm8HLk8Nv8txmg",
  authDomain: "fir-e6548.firebaseapp.com",
  databaseURL: "https://fir-e6548-default-rtdb.firebaseio.com",
  projectId: "fir-e6548",
  storageBucket: "fir-e6548.appspot.com",
  messagingSenderId: "888563614572",
  appId: "1:888563614572:web:d5d0a130dd349f5d6f6949"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const storage = getStorage(app); // Add this line to initialize Firebase Storage

export { app, db, storage };



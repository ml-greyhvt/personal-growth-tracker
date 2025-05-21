// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBAzP0BacSHqh-xwNv-r9S2lafhjusdGWk",
  authDomain: "personal-growth-tracker-c4032.firebaseapp.com",
  projectId: "personal-growth-tracker-c4032",
  storageBucket: "personal-growth-tracker-c4032.firebasestorage.app",
  messagingSenderId: "523157934687",
  appId: "1:523157934687:web:395823991998d2b31ec1ea"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

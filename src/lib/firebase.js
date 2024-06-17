import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chitchat-80427.firebaseapp.com",
  projectId: "chitchat-80427",
  storageBucket: "chitchat-80427.appspot.com",
  messagingSenderId: "1014853167563",
  appId: "1:1014853167563:web:b8ea84f2ac7e4fc117ee4e"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()
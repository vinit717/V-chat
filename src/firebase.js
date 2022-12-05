// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDo7mC3iBd_lqT0bfGcoyRwfCZjuRZU9Sw",
  authDomain: "chat-8b5bc.firebaseapp.com",
  projectId: "chat-8b5bc",
  storageBucket: "chat-8b5bc.appspot.com",
  messagingSenderId: "356705205146",
  appId: "1:356705205146:web:33e990beab11c6315cd823",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

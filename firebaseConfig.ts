// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMxBiOmeQs1yKT6cjmwUnAxmA70gm04uM",
  authDomain: "lumigram-669ad.firebaseapp.com",
  projectId: "lumigram-669ad",
  storageBucket: "lumigram-669ad.firebasestorage.app",
  messagingSenderId: "902413778757",
  appId: "1:902413778757:web:0cae54a1948eecf1e1c82c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Auth
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
  });
// Initialize Storage
export const storage = getStorage(app);
// Initialize FireStore
export const db = getFirestore(app);
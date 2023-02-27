// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6ydm_vcg2CsnPnAm91nvYaJ8jJKHsEMU",
  authDomain: "website-3bdc8.firebaseapp.com",
  projectId: "website-3bdc8",
  storageBucket: "website-3bdc8.appspot.com",
  messagingSenderId: "146410424035",
  appId: "1:146410424035:web:8699eb1bd89eaeba7967d6",
  measurementId: "G-JSBHP8RKH6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage =getStorage(app)

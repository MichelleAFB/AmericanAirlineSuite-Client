// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZT_Pxvnd7Ca04xhuUKp0VUc5HnFomQTM",
  authDomain: "americanairlinessuite.firebaseapp.com",
  projectId: "americanairlinessuite",
  storageBucket: "americanairlinessuite.appspot.com",
  messagingSenderId: "620541402731",
  appId: "1:620541402731:web:a952d86c9fb39fd4bb1b2e",
  measurementId: "G-BVHKF7SXMX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db= getFirestore()
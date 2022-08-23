// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtfeevE_CCvRZGZRwpL2HHyGemgDVsNFs",
  authDomain: "tn-calzados.firebaseapp.com",
  projectId: "tn-calzados",
  storageBucket: "tn-calzados.appspot.com",
  messagingSenderId: "212320647322",
  appId: "1:212320647322:web:2c43001437f997112b0723"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
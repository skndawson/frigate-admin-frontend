/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



//THIS IS A TEST CONFIGURATION, REPLACE WITH YOUR FIREBASE CONFIGURATION
const firebaseConfig = {
  apiKey: "AIzaSyAziL0-nLU1Lj4CwCNfJ_nOhwfjdT4kzvg",
  authDomain: "myproject-b9c9f.firebaseapp.com",
  projectId: "myproject-b9c9f",
  storageBucket: "myproject-b9c9f.appspot.com",
  messagingSenderId: "930584499281",
  appId: "1:930584499281:web:764a6e90c3471062c7d470",
  measurementId: "G-584BNWQPQP"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app,auth };
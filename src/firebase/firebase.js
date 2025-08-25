// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApC0IH8ORTyFO4_J5dkHFKy09rqZ5f7V4",
  authDomain: "project-classroom-49145.firebaseapp.com",
  projectId: "project-classroom-49145",
  storageBucket: "project-classroom-49145.firebasestorage.app",
  messagingSenderId: "145672237743",
  appId: "1:145672237743:web:0274b658c9a67b9c601a5a",
  measurementId: "G-J8M7DXJ7S0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
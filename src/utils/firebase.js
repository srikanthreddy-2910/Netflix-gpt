// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7QSbRABnQf1UjsIVY4PPUrKow_6qFv-o",
  authDomain: "netflix-gpt-f52b9.firebaseapp.com",
  projectId: "netflix-gpt-f52b9",
  storageBucket: "netflix-gpt-f52b9.firebasestorage.app",
  messagingSenderId: "1023550495930",
  appId: "1:1023550495930:web:47997087ba90028d0ab683",
  measurementId: "G-1Q0NWD3BJL",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);

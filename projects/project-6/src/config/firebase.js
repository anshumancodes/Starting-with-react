// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOmNCgQbDwjtU6uDYg5SGdobBZvNDi8VA",
  authDomain: "contact-app-290eb.firebaseapp.com",
  projectId: "contact-app-290eb",
  storageBucket: "contact-app-290eb.appspot.com",
  messagingSenderId: "986537511972",
  appId: "1:986537511972:web:c5aa977c64e6f7d4a15cb1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

//molvUt0yc1ZIja1yGtZa
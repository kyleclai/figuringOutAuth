// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDna4KthRd3VQwbofp7zpaGQhYsDDrlO5Y",
  authDomain: "chatroom-css360.firebaseapp.com",
  projectId: "chatroom-css360",
  storageBucket: "chatroom-css360.appspot.com",
  messagingSenderId: "422918245255",
  appId: "1:422918245255:web:b8be0a398436288a006122",
  measurementId: "G-ESL8YMMNX3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
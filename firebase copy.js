import { initializeApp } from "./node_modules/firebase/firebase-app.js";
import { getDatabase, ref, set, get } from "firebase/database";
import { getAuth } from "firebase/auth"; // Import getAuth from Firebase Authentication

const firebaseConfig = {
  apiKey: "AIzaSyDna4KthRd3VQwbofp7zpaGQhYsDDrlO5Y",
  authDomain: "chatroom-css360.firebaseapp.com",
  projectId: "chatroom-css360",
  storageBucket: "chatroom-css360.appspot.com",
  messagingSenderId: "422918245255",
  appId: "1:422918245255:web:b8be0a398436288a006122",
  measurementId: "G-ESL8YMMNX3",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app); // Initialize Firebase Authentication

// Update the writeUserData function to return a promise
function writeUserData(userId, username, email) {
  return set(ref(db, "users/" + userId), {
    username: username,
    email: email,
  });
}

function readUserData(userId) {
  const userRef = ref(db, "users/" + userId);
  get(userRef)
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log("User data:", snapshot.val());
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error("Error reading data:", error);
    });
}

export { auth, db, writeUserData, readUserData };

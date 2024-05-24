
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get } from "firebase/database";



const firebaseConfig = {
    apiKey: "AIzaSyAUg5d6VpoJSJ1OWe_zYg8ER3kRBpQ9nFQ",
    authDomain: "chatroom-421223.firebaseapp.com",
    projectId: "chatroom-421223",
    storageBucket: "chatroom-421223.appspot.com",
    messagingSenderId: "199486896569",
    appId: "1:199486896569:web:d04a624b5c4a469ddbde68",
    measurementId: "G-MMD690D7KC"
  };

  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
    
  function writeUserData(userId, name, email, imageUrl) {
    set(ref(db, 'users/' + userId), {
      username: name,
      email: email,
      profile_picture: imageUrl
    });
  }
  

    
  function readUserData(userId) {
    const userRef = ref(db, 'users/' + userId);
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
  
  // Call the function with sample values
  //writeUserData("someid", "somename", "asd@gmail.com", "some-image-url");

  readUserData("someid");
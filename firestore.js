// firestore.js
import { db } from './firebase-config';
import { collection, addDoc, getDocs } from 'firebase/firestore';

// Add a new message
const addMessage = async (message) => {
  try {
    const docRef = await addDoc(collection(db, 'messages'), message);
    console.log('Document written with ID: ', docRef.id);
  } catch (error) {
    console.error('Error adding document: ', error);
  }
};

// Get all messages
const getMessages = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'messages'));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  } catch (error) {
    console.error('Error getting documents: ', error);
  }
};

export { addMessage, getMessages };
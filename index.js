//index.js
import { addMessage, getMessages } from './firestore';

// Function to test adding a message
const testAddMessage = async () => {
  await addMessage({ text: 'Hello, Firestore!' });
};

// Function to test retrieving messages
const testGetMessages = async () => {
  await getMessages();
};

// Run the test functions
const runTests = async () => {
  console.log('Testing addMessage...');
  await testAddMessage();
  console.log('Testing getMessages...');
  await testGetMessages();
};

runTests();

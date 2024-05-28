// testAuth.js
const { auth } = require('./firebase');
const { createUserWithEmailAndPassword, signInWithEmailAndPassword } = require('firebase/auth');

// Function to test user registration
const testRegister = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log('User registered:', userCredential.user);
  } catch (error) {
    console.error('Error registering new user:', error.message);
  }
};

// Function to test user login
const testLogin = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log('User logged in:', userCredential.user);
  } catch (error) {
    console.error('Error logging in user:', error.message);
  }
};

// Test the functions
const runAuthTests = async () => {
  const testEmail = 'testuser@example.com';
  const testPassword = 'password123';

  console.log('Testing user registration...');
  await testRegister(testEmail, testPassword);

  console.log('Testing user login...');
  await testLogin(testEmail, testPassword);
};

runAuthTests();

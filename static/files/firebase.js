// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-analytics.js';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8qzskeJygM1nolye6bxpdhnpoTZoX1A4",
  authDomain: "thinking-buddy-blog.firebaseapp.com",
  projectId: "thinking-buddy-blog",
  storageBucket: "thinking-buddy-blog.appspot.com",
  messagingSenderId: "982642597839",
  appId: "1:982642597839:web:1eb7068ad1a045657abcba",
  measurementId: "G-R5Z532FCTR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Set up Google sign-in
const provider = new GoogleAuthProvider();

document.addEventListener('DOMContentLoaded', () => {
  const signInButton = document.getElementById('googleSignInBtn');
  const userAvatar = document.getElementById('userAvatar');
  const logoutButton = document.getElementById('logoutBtn');

  // Display appropriate buttons based on auth state
  auth.onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, show avatar and log-out button
      userAvatar.src = user.photoURL;
      userAvatar.style.display = 'block';
      logoutButton.style.display = 'block';
      signInButton.style.display = 'none';
    } else {
      // User is not signed in, show sign-in button
      userAvatar.style.display = 'none';
      logoutButton.style.display = 'none';
      signInButton.style.display = 'block';
    }
  });

  // Handle sign-in button click
  signInButton.addEventListener('click', () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log('User signed in:', result.user);
      })
      .catch((error) => {
        console.error('Error during sign-in:', error);
      });
  });

  // Handle log-out button click
  logoutButton.addEventListener('click', () => {
    auth.signOut().then(() => {
      console.log('User signed out');
    });
  });
});
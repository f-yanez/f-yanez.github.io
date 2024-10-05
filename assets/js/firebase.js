console.log("Firebase script is running");

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Set up Google sign-in
const provider = new GoogleAuthProvider();
document.getElementById('googleSignInBtn').addEventListener('click', () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // User signed in successfully
      console.log('User signed in:', result.user);
    })
    .catch((error) => {
      console.error('Error during sign-in:', error);
    });
});

console.log("Firebase script is ran");

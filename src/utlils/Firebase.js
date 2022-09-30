// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqLs9r1dFXhQAG-50CugMzGOSweENYRvU",
  authDomain: "scarlettrealism.firebaseapp.com",
  projectId: "scarlettrealism",
  storageBucket: "scarlettrealism.appspot.com",
  messagingSenderId: "46358352460",
  appId: "1:46358352460:web:57e9b7c8cfb7a9ef4f9ae9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const db = getFirestore(app);
export { auth, provider, db };

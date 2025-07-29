import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBZvWyp-evgkM9Zdayfe07af-u5Vv803UY",
  authDomain: "reactlinks-ed259.firebaseapp.com",
  projectId: "reactlinks-ed259",
  storageBucket: "reactlinks-ed259.firebasestorage.app",
  messagingSenderId: "1007654324410",
  appId: "1:1007654324410:web:b90a59afb4cec3cca1da83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
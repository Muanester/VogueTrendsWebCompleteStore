// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_174aFbya8PI5_uR4I-xV-QV_MsGIlKc",
  authDomain: "vogue-trends.firebaseapp.com",
  projectId: "vogue-trends",
  storageBucket: "vogue-trends.appspot.com",
  messagingSenderId: "661598983443",
  appId: "1:661598983443:web:97334de07b0d476c04b6e6",
  measurementId: "G-EFMVPHVQZH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

const storage = getStorage(app);

export { fireDB, auth, storage };

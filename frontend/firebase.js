// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "food-delivery-c8313.firebaseapp.com",
  projectId: "food-delivery-c8313",
  storageBucket: "food-delivery-c8313.firebasestorage.app",
  messagingSenderId: "429341619067",
  appId: "1:429341619067:web:0a14f3118a868a464d03de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export {app,auth}


//khali iska front end likhna hai backend khud ka rehta hai
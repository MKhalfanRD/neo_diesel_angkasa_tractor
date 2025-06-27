// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZrVsq_TkhNVqYoPTFRlLW97MXNu49XrA",
  authDomain: "neodieselangkasatractor.firebaseapp.com",
  projectId: "neodieselangkasatractor",
  storageBucket: "neodieselangkasatractor.firebasestorage.app",
  messagingSenderId: "237702684947",
  appId: "1:237702684947:web:e5a5907f954d3694033ae6",
  measurementId: "G-6WG4CK06X1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
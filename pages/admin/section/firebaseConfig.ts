// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeT1TbAXsGpJyU1ECz82Z-xUPnwUy5h78",
  authDomain: "twoo-359ce.firebaseapp.com",
  projectId: "twoo-359ce",
  storageBucket: "twoo-359ce.appspot.com",
  messagingSenderId: "985313088792",
  appId: "1:985313088792:web:d85cc8ff03e7cd00e9ba6d",
  measurementId: "G-TRDH0BBX42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const storage = getStorage(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6KrAKGo0nyyanmcaV4i1O2qmGisodt1Q",
  authDomain: "cv-template-826a2.firebaseapp.com",
  projectId: "cv-template-826a2",
  storageBucket: "cv-template-826a2.appspot.com",
  messagingSenderId: "352734643870",
  appId: "1:352734643870:web:22bd043dfd3614cb8f9d8f",
  measurementId: "G-G1SVL79SBK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
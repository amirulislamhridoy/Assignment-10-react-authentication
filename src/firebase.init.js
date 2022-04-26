// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYKEHdjAIq1UF59zXktbD8F-6Xlv5kpug",
  authDomain: "assignment-10-doctor-1d2b0.firebaseapp.com",
  projectId: "assignment-10-doctor-1d2b0",
  storageBucket: "assignment-10-doctor-1d2b0.appspot.com",
  messagingSenderId: "215090427063",
  appId: "1:215090427063:web:0f3b379816d2d6eb080932"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth

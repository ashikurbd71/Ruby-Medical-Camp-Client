// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDicUkIVdfC49vMRQTpITv6KuE8reRdOXc",
  authDomain: "medical-campign.firebaseapp.com",
  projectId: "medical-campign",
  storageBucket: "medical-campign.appspot.com",
  messagingSenderId: "674898308928",
  appId: "1:674898308928:web:d439788f5f1de334b554a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app)

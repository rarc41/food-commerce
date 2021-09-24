// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration

// i usually hide the the api keys with the following and enviroments variables
// but i think you wont be able evaluete my project if keep it hidden

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
//   appId: process.env.REACT_APP_FIREBASE_APPID
// };

const firebaseConfig = {
  apiKey: "AIzaSyAj2CT8gMrfGXccKuWld_057Lqy50sU_DE",
  authDomain: "imaginamos-test-8d2c7.firebaseapp.com",
  projectId: "imaginamos-test-8d2c7",
  storageBucket: "imaginamos-test-8d2c7.appspot.com",
  messagingSenderId: "558202528305",
  appId: "1:558202528305:web:c842c8377699c23c906b10"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
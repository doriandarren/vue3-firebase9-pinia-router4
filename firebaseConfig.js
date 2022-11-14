// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOmwIxhrmOBpQ6xc38VZnOne3Td4Uv-tg",
  authDomain: "fir-app-1f7b5.firebaseapp.com",
  projectId: "fir-app-1f7b5",
  storageBucket: "fir-app-1f7b5.appspot.com",
  messagingSenderId: "313035517722",
  appId: "1:313035517722:web:921a6899d33e842ef886a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {auth};
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAst1nJIQAApluQznm8UnH6-nqbSqcIPZ4",
  authDomain: "processing-center-8c4fa.firebaseapp.com",
  projectId: "processing-center-8c4fa",
  storageBucket: "processing-center-8c4fa.appspot.com",
  messagingSenderId: "319945115977",
  appId: "1:319945115977:web:60df08037b62ce4ebbf298"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
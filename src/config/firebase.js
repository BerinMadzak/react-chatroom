// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDmEB-nAfUAyzqhCgaiykImy3F9tPh1xMw",
  authDomain: "test-project-c5f2f.firebaseapp.com",
  projectId: "test-project-c5f2f",
  storageBucket: "test-project-c5f2f.appspot.com",
  messagingSenderId: "892864836287",
  appId: "1:892864836287:web:640a856f8a6beae7f34c0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
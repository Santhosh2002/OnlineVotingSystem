// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5hHtRsrLUywIQPUv5sQ58lyhIoCesZyU",
  authDomain: "abcd-62dfb.firebaseapp.com",
  projectId: "abcd-62dfb",
  storageBucket: "abcd-62dfb.appspot.com",
  messagingSenderId: "570753775056",
  appId: "1:570753775056:web:14240035d16faf9f4b75d5",
  measurementId: "G-9E8LK7CP78",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const storage = getStorage(app);
export default app;

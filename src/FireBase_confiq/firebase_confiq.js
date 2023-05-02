// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtX9AfMC05uewvlqiYohNC2JmO8T87ftk",
  authDomain: "chef-recipe-hunter-clien-d4424.firebaseapp.com",
  projectId: "chef-recipe-hunter-clien-d4424",
  storageBucket: "chef-recipe-hunter-clien-d4424.appspot.com",
  messagingSenderId: "487742741326",
  appId: "1:487742741326:web:a79eec4d6c5b9baa449c1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
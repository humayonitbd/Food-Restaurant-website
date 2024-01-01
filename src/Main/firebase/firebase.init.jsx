// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmlR5zoDXd07Mzj1Ch1UpV2HhYZX_UO1g",
  authDomain: "foodrestuarent.firebaseapp.com",
  projectId: "foodrestuarent",
  storageBucket: "foodrestuarent.appspot.com",
  messagingSenderId: "1046062998988",
  appId: "1:1046062998988:web:332580cf98c848badee969",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
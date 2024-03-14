// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVMVkdxVqpo0pM71QDtu8GtOIncC9vvhI",
  authDomain: "car-control2-2adfe.firebaseapp.com",
  projectId: "car-control2-2adfe",
  storageBucket: "car-control2-2adfe.appspot.com",
  messagingSenderId: "683452784858",
  appId: "1:683452784858:web:5f3d400836482dd21845e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export default app;
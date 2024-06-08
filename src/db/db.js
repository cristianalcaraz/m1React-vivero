import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGTotOsYQ0cO53DpqaAGxKm39FOQ6iha4",
  authDomain: "m1react-vivero.firebaseapp.com",
  projectId: "m1react-vivero",
  storageBucket: "m1react-vivero.appspot.com",
  messagingSenderId: "944641852457",
  appId: "1:944641852457:web:48dd12f8fd0fcbb178c838"
};
// Initialize Firebase
 initializeApp(firebaseConfig);

const db = getFirestore()

export default  db
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAGmkuYWS9l5VP50eSWLi9VTJjb4iAwqcI",
    authDomain: "newsletter-50720.firebaseapp.com",
    projectId: "newsletter-50720",
    storageBucket: "newsletter-50720.appspot.com",
    messagingSenderId: "413346784333",
    appId: "1:413346784333:web:59cb8ef87c7ac6ed392804"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
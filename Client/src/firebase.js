// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAplJCGTdhz4Ynmp5NbcYSYXZQd3UW19Wc",
    authDomain: "electsolve-521ce.firebaseapp.com",
    projectId: "electsolve-521ce",
    storageBucket: "electsolve-521ce.appspot.com",
    messagingSenderId: "140509941818",
    appId: "1:140509941818:web:df21235f02218af4c96503",
    measurementId: "G-B95Z4V433Q"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();


  export { db, auth };
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDMeeZL_yDOfV3wklG-pbXPxMAuDO6sd7w",
    authDomain: "react-todo-firebase-17ecc.firebaseapp.com",
    projectId: "react-todo-firebase-17ecc",
    storageBucket: "react-todo-firebase-17ecc.appspot.com",
    messagingSenderId: "418019335709",
    appId: "1:418019335709:web:2c654bb2af2245cf97b0f4",
    measurementId: "G-Z8NFYJTMP8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyB6_dxE0UBZ069r5WtDapUTfuRjJj2E7iA",
    authDomain: "todos-7b8e5.firebaseapp.com",
    databaseURL: "https://todos-7b8e5.firebaseio.com",
    projectId: "todos-7b8e5",
    storageBucket: "",
    messagingSenderId: "851432944600",
    appId: "1:851432944600:web:7a262b4d7447b7cb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase;
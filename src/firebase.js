import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDGbXijfu_39M_nQnt-KcjKnIYdXklBsWY",
  authDomain: "tik-tok-clone-4a24e.firebaseapp.com",
  databaseURL: "https://tik-tok-clone-4a24e.firebaseio.com",
  projectId: "tik-tok-clone-4a24e",
  storageBucket: "tik-tok-clone-4a24e.appspot.com",
  messagingSenderId: "1023207679251",
  appId: "1:1023207679251:web:0f8ffa3da962848d44a6e6",
  measurementId: "G-1GZ428E7NH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;

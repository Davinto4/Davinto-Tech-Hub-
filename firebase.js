// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getDatabase, ref, set, get, child, push, onChildAdded, update } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBKLhrbWwTKa9TXY5h0oLhiINnWhLkvQTQ",
  authDomain: "davinto-tech-hub.firebaseapp.com",
  projectId: "davinto-tech-hub",
  storageBucket: "davinto-tech-hub.appspot.com",
  messagingSenderId: "682350610303",
  appId: "1:682350610303:web:ce91a8e11033312f57fc4a",
  databaseURL: "https://davinto-tech-hub-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export {
  auth,
  db,
  ref,
  set,
  get,
  child,
  push,
  onChildAdded,
  update,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
};
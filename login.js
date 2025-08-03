import {
  auth,
  db,
  ref,
  get,
  child,
  signInWithEmailAndPassword
} from './firebase.js';

document.getElementById("loginBtn").onclick = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const msg = document.getElementById("msg");

  signInWithEmailAndPassword(auth, email, password)
    .then(async (userCred) => {
      const snapshot = await get(child(ref(db), "users"));
      const users = snapshot.val();
      for (let uname in users) {
        if (users[uname].email === email) {
          localStorage.setItem("username", uname);
          break;
        }
      }
      window.location.href = "chat.html";
    })
    .catch(err => msg.textContent = err.message);
};
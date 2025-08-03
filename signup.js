import {
  auth,
  db,
  ref,
  set,
  get,
  child,
  createUserWithEmailAndPassword
} from './firebase.js';

document.getElementById("signupBtn").onclick = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const username = document.getElementById("username").value.trim().toLowerCase();
  const msg = document.getElementById("msg");

  if (!email || !password || !username) {
    msg.textContent = "All fields required!";
    return;
  }

  const snapshot = await get(child(ref(db), `users/${username}`));
  if (snapshot.exists()) {
    msg.textContent = "Username already taken!";
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCred) => {
      set(ref(db, `users/${username}`), {
        uid: userCred.user.uid,
        email,
        name: username
      });
      localStorage.setItem("username", username);
      window.location.href = "chat.html";
    })
    .catch(err => msg.textContent = err.message);
};
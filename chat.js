import {
  db,
  ref,
  push,
  onChildAdded
} from './firebase.js';

const username = localStorage.getItem("username") || "Guest";
const msgInput = document.getElementById("msgInput");
const sendBtn = document.getElementById("sendBtn");
const chatBox = document.getElementById("chatBox");

sendBtn.onclick = () => {
  const message = msgInput.value.trim();
  if (message) {
    push(ref(db, "chat"), {
      user: username,
      message: message
    });
    msgInput.value = "";
  }
};

onChildAdded(ref(db, "chat"), (snapshot) => {
  const data = snapshot.val();
  const div = document.createElement("div");
  div.innerHTML = `<b>${data.user}:</b> ${data.message}`;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
});
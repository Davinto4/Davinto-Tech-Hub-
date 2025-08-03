import {
  db,
  ref,
  update
} from './firebase.js';

const username = localStorage.getItem("username");
const nameInput = document.getElementById("nameInput");
const saveBtn = document.getElementById("saveBtn");
const status = document.getElementById("status");

saveBtn.onclick = () => {
  const newName = nameInput.value.trim();
  if (!newName) {
    status.textContent = "Name cannot be empty!";
    return;
  }

  update(ref(db, `users/${username}`), {
    name: newName
  })
    .then(() => {
      status.textContent = "Name updated successfully.";
    })
    .catch((error) => {
      status.textContent = "Error: " + error.message;
    });
};
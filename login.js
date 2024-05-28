// login.js

import { login } from "./auth";

document
  .getElementById("loginForm")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    try {
      const user = await login(email, password);
      alert("Login successful! Redirecting to chatroom...");
      window.location.href = "chatroom.html"; // Redirect to chatroom page
    } catch (error) {
      alert("Login failed: " + error.message);
    }
  });

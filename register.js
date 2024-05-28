import { register } from "./auth.js"; // Ensure the path is correct and add .js extension
import { writeUserData } from "./firebase.js"; // Ensure the path is correct and add .js extension

document
  .getElementById("registerForm")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = event.target.regEmail.value;
    const password = event.target.regPassword.value;
    const username = event.target.username.value;

    console.log("Form submitted", { email, password, username }); // Debug log

    try {
      // Step 2: Call the register function to create a new user
      const user = await register(email, password, username);
      console.log("User registered:", user); // Debug log

      // Step 3: Write user data to the Realtime Database and await the promise
      await writeUserData(user.uid, username, email);
      console.log("User data written to database"); // Debug log

      alert("Registration successful! You can now log in.");
      window.location.href = "index.html"; // Redirect to login page
    } catch (error) {
      console.error("Registration failed:", error); // Debug log
      alert("Registration failed: " + error.message);
    }
  });

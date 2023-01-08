import React, { useState } from "react";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const passwordPattern =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  function handleSubmit(event) {
    event.preventDefault();
    if (passwordPattern.test(password)) {
      // Check if the email and password are correct
      if (email === "user@example.com" && password === "Password$9") {
        // Save the email in local storage as the "X-token"
        const token = email + " " + new Date().toString();
        localStorage.setItem("X-token", token);
        // Redirect the user to the /contacts route
        window.location.href = "/contacts";
      } else {
        setError("Invalid email or password");
      }
    } else {
      setError(
        "Password must be at least 8 characters long and contain 1 capital letter, 1 number, and 1 special character"
      );
    }
  }

  return (
    <div className="loginContainer">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="Type your email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Type your password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        {error && <p>{error}</p>}
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

import React, { useRef } from "react";
import Home from "../Home/Home";
import "./Login.css";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const getEmail = localStorage.getItem("emailData");
  const getPassword = localStorage.getItem("passwordData");
  const handleSubmit = () => {
    if (
      email.current.value === "user@gmail.com" &&
      password.current.value === "User$$$99"
    ) {
      localStorage.setItem("emailData", "user@gmail.com");
      localStorage.setItem("passwordData", "User$$$99");
    }
  };

  return (
    <div className="form">
      {getEmail && getPassword ? (
        <Home />
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <input type="text" ref={email}></input>
          </div>
          <div>
            <input type="password" ref={password}></input>
          </div>
          <button>Login</button>
        </form>
      )}
    </div>
  );
}

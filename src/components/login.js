import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

const Login = ({ handleLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLoginClick = () => {
    // Simple login check (username: "user", password: "password")
    if (username === "user" && password === "password") {
      handleLogin();
      navigate("/category/Action"); // Redirect to the first category after login
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1 style={{ color: "black", display: "flex", justifyContent: "center" }}>Login</h1>

        {/* Username Input with Floating Label */}
        <div className="input-container">
          <input
            type="text"
            id="username"
            placeholder=" "
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="username">Username</label>
        </div>

        {/* Password Input with Floating Label */}
        <div className="input-container">
          <input
            type="password"
            id="password"
            placeholder=" "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label htmlFor="password">Password</label>
        </div>

        <button onClick={handleLoginClick}>Login</button>
      </div>
    </div>
  );
};

export default Login;

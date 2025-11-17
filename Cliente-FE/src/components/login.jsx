import React, { useState } from "react";
import API from "../utils/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post("/signIn", { email, password });
      localStorage.setItem("token", response.data.token);
      alert("Login successful!");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong!");
    }
  };

  return (

    <form style={{textAlign: "center"}} onSubmit={handleLogin}>
      <h1>Inicio de sesion</h1>
      <input
        style={{marginLeft: "10px"}}
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        style={{marginLeft: "10px"}}
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <p></p>

      <button
        style={{ backgroundColor: "#4CAF50", color: "white", padding: "10px 10px", border: "none", borderRadius: "10px", cursor: "crosshair" }}
        type="submit"> Acceder! </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>

  );
};

export default Login;
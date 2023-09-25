import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login({ setToken }) {
  const [logindata, setLogindata] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLogindata({ ...logindata, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3002/api/login",
        logindata
      );
      const { token } = response.data;
      setToken(token);
      localStorage.setItem("token", token);
      navigate("/protected");
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={handleChange}
            value={logindata.username}
            required></input>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            value={logindata.password}
            required></input>
        </div>
        <button type="submit">Login</button>
        <div>Forget Password?</div>
        <div>New User? <a href="/register">SignUp</a></div>
      </form>
    </div>
  );
}

export default Login;

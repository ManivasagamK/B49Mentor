import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

function Register() {
  const [formdata, setFormdata] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post('http://localhost:3002/api/register', formdata);
      console.log(response.data);
      alert('Please go to login page and use the credientials for the login')
        navigate('/login');
    } catch (error) {
        console.error(error);
    }
}
  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={handleChange}
            value={formdata.username}
            required></input>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            value={formdata.password}
            required></input>
        </div>
        <button type="submit">Register</button>
        <div>Already Registered ? <a href="/login">Login</a></div>
      </form>
    </div>
  );
}
export default Register;
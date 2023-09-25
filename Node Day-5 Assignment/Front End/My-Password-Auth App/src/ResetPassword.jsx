import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ResetPassword() {
  const [newpassword, setNewpassword] = useState({
    username: "",
    password: "",
  });
  const [confrmpassword, setConfrmpassword] = useState({
    cnfrmpw: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setNewpassword({ ...newpassword, [e.target.name]: e.target.value });
    };
    const handlecnfrmpassword = (e) => {
        setConfrmpassword({ ...confrmpassword, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if (newpassword.password === confrmpassword.cnfrmpw) {
            axios.put("http://localhost:3002/api/resetpassword", newpassword);
            
        } else {
            alert("Both new password and conformation password should be same")
        }
}
  return (
    <>
      <h1>ForgetPassword</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <lable htmlfor="username">Email-id:</lable>
            <input
              type="text"
              name="username"
              id="username"
              onChange={handleChange}
              value={newpassword.username}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              required
            />
          </div>
          <div>
            <label htmlFor="password">New Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              value={newpassword.password}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            />
          </div>
          <div>
            <label htmlFor="cnfrmpw">Conform Password:</label>
            <input
              type="password"
              id="cnfrmpw"
              name="cnfrmpw"
              onChange={handlecnfrmpassword}
              value={confrmpassword.cnfrmpw}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            />
          </div>
                  <button type="submit">Save & Submit</button>
              </form>
              {/* <button onClick={navigate("/login")}>Cancel</button> */}
              <div>Cancel <a href="/login">Click here</a></div>
      </div>
    </>
  );
}
export default ResetPassword;

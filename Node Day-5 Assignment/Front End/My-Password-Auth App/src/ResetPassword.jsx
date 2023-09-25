import React,{useState} from 'react'

function ResetPassword() {
    const [newpassword, setNewpassword] = useState({
        username: "",
        password: ""
      });
      const [cnfmpassword, setCnfmpassword] = useState({ cnformpassword: "" });
    
    const handleChange = (e) = {
        setNewpasswrd({ ...newpassword, [e.target.name]: e.target.value
    });
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
                  onChange={handleChange(e)}
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
                  onChange={handleChange(e)}
                  value={newpassword.password}
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                />
              </div>
              <div>
                <label htmlFor="cnfmpassword">Conform Password:</label>
                <input
                  type="password"
                  id="cnfmpassword"
                  name="cnfmpassword"
                  onChange={handleChange}
                  value={cnfmpassword.cnformpassword}
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                />
                      </div>
                <button type="submit" >Save & Submit</button>
            </form>
          </div>
        </>
      )
      }
export default ResetPassword;
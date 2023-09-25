import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Protected from "./Protected";
import ResetPassword from "./ResetPassword";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
  };
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Password Reset Flow</h1>
          {token && <button onClick={logout}>Logout</button>}
        </header>
        <main>
          <Routes>
            <Route path="/" Component={Login}></Route>
            <Route path="/register" Component={Register}></Route>
            <Route
              path="/login"
              element={<Login setToken={setToken}></Login>}></Route>
            <Route
              path="/protected"
              element={
                token ? <Protected /> : <Navigate to="/login"></Navigate>
              }></Route>
            <Route path="/resetpassword" Component={ResetPassword}></Route>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

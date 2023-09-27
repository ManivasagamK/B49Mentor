import { BrowserRouter, Route,BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import Signup from "./Components/Signup";

function App() {
  return (
    <>
      <div style={{ color: "green" }}><b>Mani Url Shortner App</b></div>
       
     <BrowserRouter>
        <div className="App">
          <Routes>
            <Route  path="/" element={<Login />} />
            <Route  path="/dashboard" element={<Dashboard />} />
            <Route  path="/signup" element={<Signup />} />
          </Routes>
        </div>
        </BrowserRouter>
    </>
  );
}

export default App;

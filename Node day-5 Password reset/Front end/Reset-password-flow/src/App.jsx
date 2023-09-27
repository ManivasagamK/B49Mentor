import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Forgot from "./Components/Forget";
import Reset from "./Components/Reset";

import './App.css'

function App() {

  return (
    <div className="App">
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot" element={<Forgot />} />
      <Route path="/reset-password/:token" element={<Reset />} />
    </Routes>
  </div>
  )
}

export default App

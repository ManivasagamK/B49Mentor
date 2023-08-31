import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sidebar from './Component/Sidebar'
import Dashboard from './Pages/Dashboard'
import Books from './Pages/Books'
import Authordetail from './Pages/Authordetail'
import About from './Pages/About'

function App() {

  return (
    <>
      <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path='/' element={<Dashboard/>}>Dashboard</Route>
          <Route path='/dashboard' element={<Dashboard/>}>Dashboard</Route>
          <Route path='/books' element={<Books/>}>Books</Route>
          <Route path='/authordetail' element={<Authordetail/>}>Author Details</Route>
          <Route path='/about' element={<About/>}>About</Route>
        </Routes>
      </Sidebar>
      </BrowserRouter>
     
    </>
  )
}

export default App

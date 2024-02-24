import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom"
import './App.css'
import Blue from './components/Blue'
import Red from  './components/Red'
import Home from './components/Home'
function App() {

  return (
    <>
     <div id="container">
      <div id="navbar">
        <Link to='/blue'><h1>Blue</h1></Link>
        <Link to='/red'><h1>Red</h1>"</Link>
        <Link to='/'>Home</Link>
        </div>
     <div id="main-section">
      <Routes>
       <Route path='/blue' element={<Blue />} />
       <Route path='/red' element={<Red/>} />
       <Route path='/' />
      </Routes>
        </div>
    </div>
    </>
  )
}
export default App
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home'
import Login from '../pages/Login'
import '../styles/global.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route exact path="/sign-in" element={ <Login /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
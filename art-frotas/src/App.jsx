import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Nav/Navbar';
import Carrousel from './Components/Carrousel/Carrousel';



function App() {
  return (
    <Router>
      <Navbar/>
      <Carrousel/>
    </Router>
  )
}

export default App;
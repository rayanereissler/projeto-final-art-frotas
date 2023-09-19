import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Nav/Navbar';
import Footer from './Components/Footer/Footer';
import ListarVeiculo from './Components/Pages/ListarVeiculos';
import FormularioVeiculo from './Components/Pages/FormularioVeiculo';
import EditarVeiculo from './Components/Pages/EditarVeiculo';
import CriarConta from './Components/Pages/CriarConta';
import Login from './Components/Pages/Login';
import {Home} from './Components/Pages/Home';
import Sobre from './Components/Pages/Sobre';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/listar" element={<ListarVeiculo />} />
        <Route path="/add" element={<FormularioVeiculo />} />
        <Route path="/edit/:index" element={<EditarVeiculo />} />
        <Route path="/criar-conta" element={<CriarConta />} />
        <Route path="/login" element={<Login />} />
        <Route path='/' element = {< Home />} />
        <Route path='/sobre' element = {< Sobre />} />
      </Routes>

      <Footer />

    </Router>

  )
}

export default App;
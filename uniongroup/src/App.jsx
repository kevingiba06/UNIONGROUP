import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingPage  from './LoadingPage';
import HomePage from './HomePage';
import Quienessomos from './Quienessomos';
import QueHacemos from './Quehacemos';
import MarcasClientes from './MarcasClientes';
import Contactanos from './Contactanos';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoadingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/quienes-somos" element={<Quienessomos />} />
        <Route path="/que-hacemos" element={<QueHacemos />} />
        <Route path="/marcas-clientes" element={<MarcasClientes />} />
        <Route path="/contacto" element={<Contactanos />} />
      </Routes>
    </Router>
  );
}

export default App;

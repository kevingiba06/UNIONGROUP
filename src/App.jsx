import React, { useEffect, useState } from 'react'; // ✅ useEffect y useState agregados
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import LoadingPage from './LoadingPage';
import HomePage from './HomePage';
import Quienessomos from './Quienessomos';
import QueHacemos from './Quehacemos';
import MarcasClientes from './MarcasClientes';
import Contactanos from './Contactanos';
import Loader from './LoadingPage.jsx'; // ✅ Loader importado

// ✅ Componente para controlar el estado de carga al cambiar de ruta
function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true); // ✅ Activa loader al cambiar ruta
    const timeout = setTimeout(() => {
      setLoading(false); // ✅ Oculta loader después de 600ms
    }, 600);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <>
      {loading && <Loader />} {/* ✅ Loader visible cuando `loading` es true */}
      <Routes>
        <Route path="/" element={<LoadingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/quienes-somos" element={<Quienessomos />} />
        <Route path="/que-hacemos" element={<QueHacemos />} />
        <Route path="/marcas-clientes" element={<MarcasClientes />} />
        <Route path="/contacto" element={<Contactanos />} />
      </Routes>
    </>
  );
}

// ✅ Envolvemos AppContent dentro de <Router>
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

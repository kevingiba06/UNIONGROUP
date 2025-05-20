import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './logo_footer_2.svg';
import './stylesloading.css';

function LoadingPage() {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear(); // Año actual

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 2500); // Espera 2.5 segundos antes de redirigir

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="loading-container">
      <div className="logo-row">
        <span className="year-text">1980</span>
        <img src={logo} className="loading-logo" alt="Cargando..." />
        <span className="year-text">{currentYear}</span>
      </div>
      <p className="loading-text">UNION GROUP</p>
    </div>
  );
}

export default LoadingPage;

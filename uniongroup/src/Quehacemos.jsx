import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link
import './quehacemos.css';
import backIcon from './assets/icons8-atras-48.png';


function Quehacemos() {
  return (
    <div className="home-container">
      <div className="logo-text">
        <div className="logo"></div>
        <div className="text">
          <Link to={"/quienes-somos"}>QUIENES SOMOS</Link>
          <Link to={"/marcas-clientes"}>MARCAS & CLIENTES</Link>
          <Link to={"/contacto"}>CONTACTO</Link>
          <Link to={"/"}>
          <img src={backIcon} alt="Regresar" className="icon-svg" /></Link>

        </div>
      </div>
    </div>
  );
}

export default Quehacemos;

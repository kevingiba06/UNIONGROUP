import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link
import './quehacemos.css';
import backIcon from './assets/icons8-atras-48.png';



function Quehacemos() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="home-container">
      <div className="logo-text">
        <div className="logo"></div>
        <div className="text">
          <Link to={"/quienes-somos"}>QUIENES SOMOS</Link>
          <Link to={"/marcas-clientes"}>MARCAS & CLIENTES</Link>
          <Link to={"/contacto"}>CONTACTO</Link>
          <Link to={"/"}>
            <img src={backIcon} alt="Regresar" className="icon-svg" />
          </Link>
        </div>
      </div>
        <div className='center'>
        <div className='title'>
          QUE HACEMOS
        </div>
        <div className='info'>
          Gestión de Marcas Globales, Desarrollo y diseño de producto, Sourcing, Licencias, Marketing y Ventas a través de tiendas , e-commerce y wholesale
        </div>
        <div className='title'>
          M
        </div>
        <div className='info'>
          Gestión de Marcas Globales, Desarrollo y diseño de producto, Sourcing, Licencias, Marketing y Ventas a través de tiendas , e-commerce y wholesale
        </div>
        <div className='title'>
          V
        </div>
        <div className='info'>
          Gestión de Marcas Globales, Desarrollo y diseño de producto, Sourcing, Licencias, Marketing y Ventas a través de tiendas , e-commerce y wholesale
        </div>
      </div>

      <div className='info-email-logo'>
        <div className='info'>
          <p>Alianzas globales, relaciones sólidas</p>
        </div>
        <div className='email'>
          recursoshumanos@uniongroup.mx
        </div>
        <div className='years-logo-container'>
          <span className='year'>1980</span>
          <div className='police'>
            <div className='logo2_1'></div>
            <p>© Privacy Police</p>
          </div>
          <span className='year'>{currentYear}</span>
        </div>
      </div>
    </div>

      
    

    
  );
}

export default Quehacemos;

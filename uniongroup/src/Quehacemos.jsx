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
        <h1 className='title'>
          Que hacemos
        </h1>
        <div className='info'>
          Gestión de Marcas Globales,<br></br>
          Desarrollo y diseño de productos, Sourcing, Licencias, Marketing y Ventas a través de tiendas , e-commerce y wholesale
        </div>
        <h2 className='title'>
          Misión
        </h2>
        <div className='info'>
          Ser el portafolio de marcas más importante para nuestros socios y clientes.
        </div>
        <h2 className='title'>
          Visión
        </h2>
        <div className='info'>
          Asegurar resultados que cumplan con las necesidades del mercado y la promesa de cada marca.
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

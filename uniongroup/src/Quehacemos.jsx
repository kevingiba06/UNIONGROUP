import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link
import './quehacemos.css';
import backIcon from './assets/icons8-atras-48.png';
import mapa_union from './assets/mapa_union.jpg';



function Quehacemos() {
  const currentYear = new Date().getFullYear();
  const [seleccion, setSeleccion] = useState(null);

  const opciones = [
    {
      titulo: "Diseño",
      descripcion: "Creamos conceptos de productos que se adaptan al mercado y tendencias actuales.",
      imagen: "#"
    },
    { titulo: "Marketing", descripcion: "Desarrollamos campañas enfocadas en la identidad de cada marca." },
    {
      titulo: "Ventas",
      descripcion: "Gestionamos ventas al por mayor, e-commerce y tiendas físicas.",
      imagen: mapa_union
    },
    { titulo: "Sourcing", descripcion: "Identificamos y gestionamos proveedores confiables globalmente." }
  ];

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
          Gestión de Marcas Globales, Desarrollo<br />
          y diseño de productos, Sourcing,<br />
          Licencias, Marketing y Ventas a través<br />
          de tiendas , e-commerce y wholesale
        </div>
        <h2 className='title'>
          Misión
        </h2>
        <div className='info'>
          Ser el portafolio de marcas más importante<br />
          para nuestros socios y clientes.
        </div>
        <h2 className='title'>
          Visión
        </h2>
        <div className='info'>
          Asegurar resultados que cumplan con las necesidades<br />
          del mercado y la promesa de cada marca.
        </div>
      </div>
      <div className='center2'>
        <div className='subtitle'>
          <div className="selector-container">
            {opciones.map((item, index) => (
              <div
                key={index}
                className="selector-opcion"
                onClick={() => setSeleccion(item)} // Al hacer clic, cambia el estado
                style={{
                  cursor: 'pointer',
                  margin: '5px',
                  color: '#537e5f',
                }}
              >
                {item.titulo}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='center3'>
        <div className='info'>
          {seleccion && (
            <div className="contenido-seleccionado" style={{ marginTop: '20px' }}>
              <h3>{seleccion.titulo}</h3>
              <p>{seleccion.descripcion}</p>
            </div>
          )}
        </div>
        <div className='image'>
          {seleccion && seleccion.imagen && (
            <img
              src={seleccion.imagen}
              alt={seleccion.titulo}
              className="imagen-seleccion"
              style={{ maxWidth: '300px', height: 'auto', borderRadius: '10px' }}
            />
          )}
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

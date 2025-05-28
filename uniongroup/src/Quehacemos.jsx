import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './quehacemos.css';
import backIcon from './assets/icons8-atras-48.png';
import mapa_union from './assets/mapa_union.jpg';
import rbk from './assets/rbk.png';
import dc from './assets/dc.png';
import bbong from './assets/bbong.png';
import rxy from './assets/rxy.png';
import logo_rbk from './assets/logo_reebok.svg';
import logo_dc from './assets/logo_dc.svg';
import logo_rxy from './assets/logo_roxy.svg';
import logo_bbong from './assets/logo_billabong.svg';
import logo_board from './assets/LOGO_BOARD.svg';
import des_y_dis from './assets/DESARROLLO Y DISEÑO.jpg';
import board from './assets/TIENDA_BOARD.jpg';
import tndreebok from './assets/tienda_REEBOK.jpg';

function Quehacemos() {
  const currentYear = new Date().getFullYear();
  const [seleccion, setSeleccion] = useState(null);

  const opciones = [
    {
      titulo: "Marcas \nGlobales",
      descripcion: "Management y Gestión de Marcas Internacionales distribuyendo y desarrollando productos de alta calidad.",
      imagenes: [
        { img: rbk, logo: logo_rbk, link: "https://www.reebok.mx/" },
        { img: dc, logo: logo_dc, link: "https://dcshoes.mx/?gad_source=1&gad_campaignid=22331569632&gbraid=0AAAAA-bjNF6NzEnFgTKqIJeARzGNRTn6f&gclid=Cj0KCQjwxdXBBhDEARIsAAUkP6g06kUQSM9D5Guf38bLgXQDNGg8C2K7vnVfRZiN_WcNajviRbQRs78aAgk4EALw_wcB" },
        { img: rxy, logo: logo_rxy, link: "https://www.roxy.com" },
        { img: bbong, logo: logo_bbong, link: "https://www.billabong.com/" },
      ]
    },
    {
      titulo: "Desarrollo \ny Diseño",
      imagen: des_y_dis
    },
    {
      titulo: "Sourcing",
      imagen: mapa_union
    },
    {
      titulo: "Realciones \nEstratégicas",
      imagenes: [],
      descripcion: "Identificamos y gestionamos proveedores confiables globalmente."
    },
    {
      titulo: "Retail",
      descripcion: "",
      imagenes: [
        { img: board, logo: logo_board, link: "https://www.boardriders.eu" },
        { img: tndreebok, logo: logo_rbk, link: "https://www.reebok.mx/" },
      ]
    }
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
        <h1 className='title'>Que hacemos</h1>
        <div className='info'>
          Gestión de Marcas Globales, Desarrollo<br />
          y diseño de productos, Sourcing,<br />
          Licencias, Marketing y Ventas a través<br />
          de tiendas , e-commerce y wholesale
        </div>
        <h2 className='title'>Misión</h2>
        <div className='info'>
          Ser el portafolio de marcas más importante<br />
          para nuestros socios y clientes.
        </div>
        <h2 className='title'>Visión</h2>
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
                onClick={() => setSeleccion(item)}
                style={{
                  cursor: 'pointer',
                  margin: '5px',
                  color: '#537e5f',
                  fontSize: '40px',
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
            <div className="contenido-seleccionado">
              <h3>{seleccion.titulo}</h3>
              <p>{seleccion.descripcion}</p>
            </div>
          )}
        </div>
      </div>

      {seleccion && (
        <>
          {seleccion.imagenes ? (
            <div className="imagenes-seleccion">
              {seleccion.imagenes.map((item, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <a href={item.link} target='_blank' rel='noopener noreferrer'>
                    <img
                      src={item.img}
                      alt={`${seleccion.titulo} ${i}`}
                      className="imagen-seleccion"
                    />
                    <img
                      src={item.logo}
                      alt={`Logo ${i}`}
                      style={{ height: '50px', marginTop: '10px', objectFit: 'contain' }}
                    />
                  </a>
                </div>
              ))}
            </div>
          ) : seleccion.imagen ? (
            <img
              src={seleccion.imagen}
              alt={seleccion.titulo}
              className="imagen-seleccion"
            />
          ) : null}
        </>
      )}

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

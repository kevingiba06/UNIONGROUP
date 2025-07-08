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
import AOS from 'aos';
import 'aos/dist/aos.css';
import jlo_quehacemos from './assets/jlo_quehacemos.jpg';
import { useEffect } from 'react';
import logo_jlo from './assets/logo_jlo.svg';
import foto_moises from './assets/FOTO_MOISES.jpg';
import ms from './assets/MOI Y SHAQ.jpg';
import jj from './assets/JENIFER Y JOSE.jpg';
import tlt from './assets/TODOSLOSTAWIL.jpg';

function Quehacemos() {
  const currentYear = new Date().getFullYear();
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Duración de la animación en milisegundos
      once: false      // Solo se anima una vez
    });
  }, []);

  const [seleccion, setSeleccion] = useState(null);
  const opciones = [
    {
      titulo: "Marcas \nGlobales", descripcion: "Management y Gestión de Marcas Internacionales distribuyendo y desarrollando productos de alta calidad.", imagenes: [{ img: rbk, logo: logo_rbk, link: "https://www.reebok.mx/" }, { img: dc, logo: logo_dc, link: "https://dcshoes.mx/?gad_source=1&gad_campaignid=22331569632&gbraid=0AAAAA-bjNF6NzEnFgTKqIJeARzGNRTn6f&gclid=Cj0KCQjwxdXBBhDEARIsAAUkP6g06kUQSM9D5Guf38bLgXQDNGg8C2K7vnVfRZiN_WcNajviRbQRs78aAgk4EALw_wcB" }, { img: rxy, logo: logo_rxy, link: "https://www.roxy.com" }, { img: bbong, logo: logo_bbong, link: "https://www.billabong.com/" }, { img: jlo_quehacemos, logo: logo_jlo, link: "https://www.coppel.com/jennifer-lopez" },]
    },
    {
      titulo: "Desarrollo \ny Diseño", imagen: des_y_dis, style: { width: '100%', height: 'auto', objectFit: 'contain' }
    },
    {
      titulo: "Sourcing", imagen: mapa_union
    },
    {
      titulo: "Relaciones \nEstratégicas", disableLinks: true, imagenes: [{ img: tlt, texto: "Lanzamiento Reebok" }, { img: foto_moises, texto: "Halston" }, { img: ms, texto: "Shaquille O´Neal" }, { img: jj, texto: "Jennifer Lopez" },],
      descripcion: "Identificamos y gestionamos proveedores confiables globalmente."
    },
    {
      titulo: "Retail",
      descripcion: "",
      imagenes: [
        { img: board, logo: logo_board, link: "https://www.boardriders.eu", },
        { img: tndreebok, logo: logo_rbk, link: "https://www.reebok.mx/" },
      ],
      ubicaciones: [
        { nombre: "Tienda Reebok CDMX", direccion: "https://goo.gl/maps/EXAMPLE1" },
        { nombre: "Boardriders Cancún", direccion: "https://goo.gl/maps/EXAMPLE2" }
      ],
      style: {
        width: '100%',
        height: 'auto',
        objectFit: 'contain'
      }
    }
  ];

  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <div className="home-container">
      <div className='logo-text'>
        <button className="menu-toggle" onClick={() => setMenuAbierto(!menuAbierto)}>
          {menuAbierto ? '✖' : '☰'}
        </button>
        <div className='logo'></div>

        {/* Menú de navegación con clase condicional */}
        <div className={`text ${menuAbierto ? 'mostrar' : ''}`}>
          <Link to={"/quienes-somos"}>QUIENES SOMOS</Link>
          <Link to={"/marcas-clientes"}>MARCAS & CLIENTES</Link>
          <Link to={"/contacto"}>CONTACTO</Link>
          <Link to={"/"}>
            <img src={backIcon} alt="Regresar" className="icon-svg" />
          </Link>
        </div>
      </div>

      <div className='center' data-aos="fade-up">
        <h1 className='title' data-aos="fade-up">Que hacemos</h1>
        <div className='info' data-aos="fade-up">
          Gestión de Marcas Globales, Desarrollo<br />
          y diseño de productos, Sourcing,<br />
          Licencias, Marketing y Ventas a través<br />
          de tiendas , e-commerce y wholesale
        </div>
        <h2 className='title' data-aos="fade-up">Misión</h2>
        <div className='info' data-aos="fade-up">
          Ser el portafolio de marcas más importante<br />
          para nuestros socios y clientes.
        </div>
        <h2 className='title' data-aos="fade-up">Visión</h2>
        <div className='info' data-aos="fade-up">
          Asegurar resultados que cumplan con las necesidades<br />
          del mercado y la promesa de cada marca.<br /><br />
        </div>
      </div>

      <div className='center2' data-aos="fade-up">
        <div className='subtitle' data-aos="fade-up">
          <div className="selector-container" data-aos="fade-up">
            {opciones.map((item, index) => (
              <div
                key={index}
                className="selector-opcion" data-aos="fade-up"
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

      <div className='center3' data-aos="fade-up">
        <div className='info' data-aos="fade-up">
          {seleccion && (
            <div className="contenido-seleccionado" data-aos="fade-up">
              <h3>{seleccion.titulo}</h3>
              <p>{seleccion.descripcion}</p>
            </div>
          )}
        </div>
      </div>

      {seleccion && (
        <>
          {seleccion.imagenes ? (
            <div className="imagenes-seleccion" data-aos="fade-up">
              {seleccion.imagenes.map((item, i) => (
                <div key={i} style={{ textAlign: 'center', width: '100%' }}>
                  {seleccion.disableLinks ? (
                    <>
                      <img
                        src={item.img}
                        alt={`${seleccion.titulo} ${i}`}
                        className="img-expand"
                        data-aos="fade-up"
                      />
                      {/*  TEXTO DEBAJO DE LA IMAGEN */}
                      {item.texto && (
                        <p style={{ marginTop: '10px', color: '#ffff', fontSize: '30px' }}>
                          {item.texto}
                        </p>
                      )}
                      {item.logo && (
                        <img
                          src={item.logo}
                          alt={`Logo ${i}`}
                          className="img-expand"
                          style={{ height: '50px', marginTop: '10px', objectFit: 'contain' }}
                        />
                      )}
                    </>
                  ) : (
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      <img
                        src={item.img}
                        alt={`${seleccion.titulo} ${i}`}
                        className="img-expand"
                        data-aos="fade-up"
                      />
                      {item.logo && (
                        <img
                          src={item.logo}
                          alt={`Logo ${i}`}
                          className="img-expand"
                          style={{ height: '50px', marginTop: '10px', objectFit: 'contain' }}
                        />
                      )}
                    </a>
                  )}
                </div>
              ))}
            </div>
          ) : seleccion.imagen ? (
            <img
              src={seleccion.imagen}
              alt={seleccion.titulo}
              className="img-expand" data-aos="fade-up"
              style={seleccion.style}
            />
          ) : null}
        </>
      )}

      <div className='info-email-logo'>
        <div className='info'>
          <p>Alianzas globales, relaciones sólidas</p>
        </div>
        <div className='email'>
          pr@uniongroup.mx
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

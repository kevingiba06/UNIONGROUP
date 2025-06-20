import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link
import './quienessomos.css';
import backIcon from './assets/icons8-atras-48.png';
import logo_textos from 'uniongroup/src/logo_footer_2.svg';
import 'aos/dist/aos.css';
import AOS from 'aos';
//import ttt from './assets/TAWIL-REEBOK.jpg';
//import fm from './assets/FOTO-MOISES-1.jpg';
//import mg from './assets/MOI_GUYLAROCHE.jpg';




function Quienessomos() {
  const [selected, setSelected] = useState(0);
  const currentYear = new Date().getFullYear();
  useEffect((useEffect) => {
    AOS.init({
      duration: 500,
      once: false,
    });
  }, []);
  return (

    <div className="home-container">
      <div className="logo-text">
        <div className="logo"></div>
        <div className="text">
          <Link to={"/que-hacemos"}>QUE HACEMOS</Link>
          <Link to={"/marcas-clientes"}>MARCAS & CLIENTES</Link>
          <Link to={"/contacto"}>CONTACTO</Link>
          <Link to={"/"}>
            <img src={backIcon} alt="Regresar" className="icon-svg" />
          </Link>
        </div>
      </div>

      <div className='center1' style={{ backgroundColor: 'black' }}>
        <div className='texto' data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="1500">
          <p>Somos una compañía de clase mundial, enfocada en el manejo de marcas, Desarrollo, Sourcing y Diseño de Producto, que cuenta con Relaciones Comerciales sólidas.</p>
          <p>Somos la empresa que gestiona y maneja grandes marcas con los mejores productos para Mexico, como la tuya.</p>
          <p>Somos las manos creativas que diseñan, pero también las manos expertas que hacen que tus productos cobren vida, siempre poniendo el ojo en cada detalle para mantener la más alta calidad, tal y como a ti te gusta.</p>
          <p>Somos los que importamos, almacenamos y distribuimos todos los productos para la republica mexicana... y cuando decimos todos, nos referimos a todos.</p>
          <p>Porque además de tener licencias y un portafolio amplio de marcas internacionales, con diversos productos en el mercado, tambien somos los que contamos su historia, como la tuya, en los diferentes medios de comunicación.</p>
          <p>Y es por eso que decimos que somos mas que la empresa, somos la compañía perfecta... si sabes a lo que me refiero.</p>
          <p>Así que ¡Confía en nosotros! tu marca esta en buenas manos.</p>
          <img className='logo_texto' src={logo_textos} alt="imagen" />
          <p>Tu compañía en management y gestión de marcas internacionales.</p>
          <p>Desarrollo y Diseño.</p>
          <p>Sourcing.</p>
          <p>Relaciones comerciales.</p>
          <p>Retail.</p>
        </div>
      </div>

      <div className='center2' style={{ backgroundColor: 'black' }}>
        <div className='titlee' data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="1500">
          <p>Somos una compañía con:</p>
          <div className='texto' data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="1500">
            <p>Colaboradores + 400</p>
            <p>Unidades vendidas al por menor  + 30M</p>
          </div>
        </div>
      </div>

      <div className="timeline-container" data-aos="zoom-in-up" data-aos-duration="800">
        <p>Nuestra Historia</p>
        <iframe 
        src='https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=v2%3A2PACX-1vREG8poNdxYS7fGjtkcoeAHbdRUvglQz5BvEPEZI0C9KdQ9w6-6aDF-znD4_2eTW2dhxQ_MFPBnlS-P&font=Default&lang=es&initial_zoom=2&width=100%25&height=650' width='100%' height='1000'
        allowfullscreen 
        frameborder='0'>
        </iframe>
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

export default Quienessomos;

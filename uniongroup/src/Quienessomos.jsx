import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link
import './quienessomos.css';
import backIcon from './assets/icons8-atras-48.png';
import logo_textos from 'uniongroup/src/logo_footer_2.svg';
import 'aos/dist/aos.css';
import AOS from 'aos';
import ttt from './assets/TAWIL-REEBOK.jpg';
import fm from './assets/FOTO-MOISES-1.jpg';
import novdos from './assets/9294031213.jpg';
import mg from './assets/MOI_GUYLAROCHE.jpg';
import fn from './assets/99.jpg';
import doscu from './assets/04.jpg';
//import dosci from './assets/';
import dosoc from './assets/08.jpg';
import dosnu from './assets/09.jpg';
import dosdi from './assets/10.jpg';
import dosqu from './assets/15.jpg';
import doste from './assets/17.jpg';
import dosho from './assets/18.png';
import dosve from './assets/19.jpg';
import dosvo from './assets/21.jpg';
import dosvs from './assets/22.png';
import dosvr from './assets/23.jpg';
import dosvt from './assets/24.png';

const timelineData = [
  { year: '1980', image: ttt, description: 'Moises Tawil inaugura Licencias Internacionales con el objetivo de sublicenciar marcas bajo un modelo de royalties.' },
  { year: '1981', image: fm, description: 'Expansión internacional.' },
  { year: '1989', image: mg, description: 'Nuevas alianzas estratégicas.' },
  { year: '1992', image: novdos, description: 'Presente: innovación y tecnología.' },
  { year: '1994', image: novdos, description: 'Presente: innovación y tecnología.' },
  { year: '1999', image: fn, description: 'Presente: innovación y tecnología.' },
  { year: '2003', image: novdos, description: 'Presente: innovación y tecnología.' },
  { year: '2004', image: doscu, description: 'Presente: innovación y tecnología.' },
  { year: '2005', image: '#', description: 'Presente: innovación y tecnología.' },
  { year: '2008', image: dosoc, description: 'Presente: innovación y tecnología.' },
  { year: '2009', image: dosnu, description: 'Presente: innovación y tecnología.' },
  { year: '2010', image: dosdi, description: 'Presente: innovación y tecnología.' },
  { year: '2012', image: novdos, description: 'Presente: innovación y tecnología.' },
  { year: '2013', image: novdos, description: 'Presente: innovación y tecnología.' },
  { year: '2015', image: dosqu, description: 'Presente: innovación y tecnología.' },
  { year: '2017', image: doste, description: 'Presente: innovación y tecnología.' },
  { year: '2018', image: dosho, description: 'Presente: innovación y tecnología.' },
  { year: '2019', image: dosve, description: 'Presente: innovación y tecnología.' },
  { year: '2021', image: dosvo, description: 'Presente: innovación y tecnología.' },
  { year: '2022', image: dosvs, description: 'Presente: innovación y tecnología.' },
  { year: '2023', image: dosvr, description: 'Presente: innovación y tecnología.' },
  { year: '2024', image: dosvt, description: 'Presente: innovación y tecnología.' },
]

const secData = [
  { title: 'Perseverancia', description: 'Se firme y constante en todo\n lo que te propones, no te\n rindas ante las dificultades y\n lo alcanzarás.' },
  { title: 'Humanismo', description: '*' },
  { title: 'Pasión', description: '/' },
  { title: 'Integridad', description: '1' },
  { title: 'Lealtad', description: '2' },
]

function Quienessomos() {
  const [selectedTimeline, setSelectedTimeline] = useState(0);
  const [selectedValue, setSelectedValue] = useState(0);

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
        <div className='title'>Quienes Somos</div>
        <div className='texto' data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="1500">
          <p>Somos una compañía de clase mundial, enfocada en el manejo de marcas, Desarrollo, Sourcing y Diseño de Producto, que cuenta con Relaciones Comerciales sólidas.<br /><br />
            Somos la empresa que gestiona y maneja grandes marcas con los mejores productos para Mexico, como la tuya.<br /><br />
            Somos las manos creativas que diseñan, pero también las manos expertas que hacen que tus productos cobren vida, siempre poniendo el ojo en cada detalle para mantener la más alta calidad, tal y como a ti te gusta.<br /><br />
            Somos los que importamos, almacenamos y distribuimos todos los productos para la republica mexicana... y cuando decimos todos, nos referimos a todos.<br /><br />
            Porque además de tener licencias y un portafolio amplio de marcas internacionales, con diversos productos en el mercado, tambien somos los que contamos su historia, como la tuya, en los diferentes medios de comunicación.<br /><br />
            Y es por eso que decimos que somos mas que la empresa, somos la compañía perfecta... si sabes a lo que me refiero.<br /><br />
            Así que ¡Confía en nosotros! tu marca esta en buenas manos.<br /><br />
            <img className='logo_texto' src={logo_textos} alt="imagen" /><br /><br />
            Tu compañía en management y gestión de marcas internacionales.<br /><br />
            Desarrollo y Diseño.<br /><br />
            Sourcing.<br /><br />
            Relaciones comerciales.<br /><br />
            Retail.
          </p>
        </div>
      </div>

      <div className='titlee' data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="1500">
        <p>Somos una compañía con:</p>
      </div>
      <div className='center_2' style={{ backgroundColor: 'black' }}>
        <div className='text cif'>
          <p>Colaboradores</p>
          <p>Unidades vendidas al por menor</p>
        </div>
        <div className='texto' data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="1500">
          <p>+400</p>
          <p>+30M</p>
        </div>
      </div>

      <div className='title'>Nuestro Camino<br />Histórico</div>
      <div className="timeline-container" data-aos="flip-left">
        <div className="timeline-left" data-aos="flip-left">
          <div className='up' data-aos="flip-left">
            {timelineData.map((item, index) => (
              <div key={index} className={`timeline-year ${index === selectedTimeline ? 'active' : ''}`} onClick={() => setSelectedTimeline(index)}>
                {item.year}
              </div>
            ))}
          </div>
          <div className='down'>
            <div className='text cif'>
              <div className='title'>
                {timelineData[selectedTimeline].year}
              </div>
            </div>
            <p>{timelineData[selectedTimeline].description}</p>
          </div>
        </div>
        <div className="timeline-right" data-aos="flip-left">
          <img src={timelineData[selectedTimeline].image} alt={timelineData[selectedTimeline].year} />
        </div>
      </div>

      <div className='title2'>Nuestros Valores</div>
      <div className='sec-container'>
        <div className='sec-left'>
          {secData.map((item, index) => (
            <div key={index} className={`select-title ${index === selectedValue ? 'active' : ''}`} onClick={() => setSelectedValue(index)}>
              {item.title}
            </div>
          ))}
        </div>
        <div className='sec-right'>
          {secData[selectedValue].description.split('\n').map((line, idx) => (
            <span key={idx}>
              {line}
              <br />
            </span>
          ))}
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

export default Quienessomos;

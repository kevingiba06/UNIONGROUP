import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link
import './quienessomos.css';
import backIcon from './assets/icons8-atras-48.png';
import logo_textos from './logo_footer_2.svg';
import 'aos/dist/aos.css';
import AOS from 'aos';
import ttt from './assets/TAWIL-REEBOK.jpg';
import fm from './assets/FOTO-MOISES-1.jpg';
import novdos from './assets/9294031213.jpg';
import mg from './assets/MOI_GUYLAROCHE.jpg';
import fn from './assets/99.jpg';
import doscu from './assets/04.jpg';
import dosci from './assets/2005.jpg';
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
  { year: '1981', image: fm, description: 'Se formaliza un acuerdo con Halston y lo incorporamos a nuestro portafolio de Licencias Máster.' },
  { year: '1989', image: mg, description: 'Se formaliza un acuerdo con Guy Laroche y lo incorporamos a nuestro portafolio de Licencias Máster.' },
  { year: '1992', image: novdos, description: 'Se formaliza un acuerdo con Ted Lapidus y lo incorporamos a nuestro portafolio de Licencias Máster.' },
  { year: '1994', image: novdos, description: 'Se formaliza un acuerdo con Pierre Balmain y lo incorporamos a nuestro portafolio de Licencias Máster.' },
  { year: '1999', image: fn, description: 'Se adquiere una participación del 50% en distribución y sublicencia de FUBU' },
  { year: '2003', image: novdos, description: 'Se formaliza un acuerdo con Torino Lamborghini y lo incorporamos a nuestro portafolio de Licencias Máster.' },
  { year: '2004', image: doscu, description: 'Integración de York Team Polo Club con Full Brand Management.' },
  { year: '2005', image: dosci, description: 'Con la incorporación de José Tawil, primer miembro de la segunda generación, la empresa inicia la comercialización directa de productos, comenzando con la categoría de calcetería, bajo las marcas POLO, FUBU y LOTTO.' },
  { year: '2008', image: dosoc, description: 'Se incorpora Alan Tawil, segunda generación, con Quiznos y Gloria Jeans con Licencia Máster exclusiva para México.' },
  { year: '2009', image: dosnu, description: 'Se realiza el lanzamiento de Baby Phat en Liverpool.' },
  { year: '2010', image: dosdi, description: 'Se incorpora como master license y distribución Members Only.' },
  { year: '2012', image: novdos, description: 'Se abre la categoría de outerwear, junto el área de desarrollo y sourcing en China.' },
  { year: '2013', image: novdos, description: 'Eduardo Tawil se incorpora a la empresa, asumiendo la responsabilidad del área de underwear.' },
  { year: '2015', image: dosqu, description: 'La empresa adquiere la exclusividad de la marca Jennifer Lopez - JLO, implementando una estrategia de Full Brand Management.' },
  { year: '2017', image: doste, description: 'Se firma un acuerdo con la marca CAT para el desarrollo y la comercialización directa de sus productos.' },
  { year: '2018', image: dosho, description: 'Se firma YorkTeam Polo Club y Náutica para desarrollar y comercializar la categoría de calzado y accesorios.' },
  { year: '2019', image: dosve, description: 'Se firmó la licencia para las categorías de calzado y calcetería para Disney y Marvel.' },
  { year: '2021', image: dosvo, description: 'La marca Jeep se incorpora a Union Group en las categorías de apparel y accesorios.' },
  { year: '2022', image: dosvs, description: 'Hemos sido seleccionados para adquirir la marca Reebok y operar en los canales Wholesale y DTC, abarcando todas sus categorías.' },
  { year: '2023', image: dosvr, description: 'Hemos sido seleccionados como operadores de la marca Boardriders conformada por Roxy, Quiksilver, Billabong y DC shoes, en los tres canales de distribución, y se han firmado las licencias de Shaq y Aeropostale para la categoría de calzado.' },
  { year: '2024', image: dosvt, description: 'Hoy hemos inaugurado más de 20 tiendas, abarcando las marcas Reebok y Boardriders.' },
]

const secData = [
  { title: 'Perseverancia', description: 'Se firme y constante en todo\n lo que te propones, no te\n rindas ante las dificultades y\n lo alcanzarás.' },
  { title: 'Humanismo', description: 'Somos empáticos,\n transparentes y respetamos a\n cada persona que nos rodea.' },
  { title: 'Pasión', description: 'La honestidad, respeto por los\n demás, responsabilidad y\n cumplimiento.' },
  { title: 'Integridad', description: 'Vive con emoción e\n intensidad, disfruta y ama lo\n que haces lleno de\n satisfacción.' },
  { title: 'Lealtad', description: 'Demuestra tu entrega\n incondicional, fidelidad a tus\n principios y honestidad en\n todo el entorno.' },
]

function Quienessomos() {
  const [selectedTimeline, setSelectedTimeline] = useState(0);
  const [selectedValue, setSelectedValue] = useState(0);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const dropdownTimeoutRef = React.useRef();

  const currentYear = new Date().getFullYear();
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
    });
  }, []);

  const [menuAbierto, setMenuAbierto] = useState(false);

  return (

    <div className="home-container">
      <div className='logo-text'>
        <button className="menu-toggle" onClick={() => setMenuAbierto(!menuAbierto)}>
          {menuAbierto ? '✖' : '☰'}
        </button>
        <Link to={"/"}>
          <div className='logo'></div>
        </Link>

        {/* Menú de navegación con clase condicional */}
        <div className={`text ${menuAbierto ? 'mostrar' : ''}`}>
          <Link to={"/que-hacemos"}>QUE HACEMOS</Link>
          {/* Dropdown MARCAS & CLIENTES */}
          <div
            className="dropdown-marcas-clientes"
            onMouseEnter={() => {
              if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
              setDropdownOpen(true);
            }}
            onMouseLeave={() => {
              dropdownTimeoutRef.current = setTimeout(() => setDropdownOpen(false), 400);
            }}
            tabIndex={0}
            onFocus={() => setDropdownOpen(true)}
            onBlur={() => {
              dropdownTimeoutRef.current = setTimeout(() => setDropdownOpen(false), 400);
            }}
          >
            <Link to={"/marcas-clientes"} className="dropdown-toggle">MARCAS & CLIENTES</Link>
            <div className="dropdown-content" style={{ display: dropdownOpen ? 'block' : 'none' }}>
              {[
                { nombre: 'JLO Jennifer Lopez', idx: 0 },
                { nombre: 'YorkTeam Polo Club', idx: 1 },
                { nombre: 'Reebok', idx: 2 },
                { nombre: 'Boardriders', idx: 3 }
              ].map((item) => (
                <button
                  key={item.idx}
                  className="dropdown-item"
                  onClick={() => {
                    window.location.href = `/marcas-clientes?promesa=${item.idx}#mp`;
                  }}
                  style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', width: '100%', textAlign: 'left', padding: '8px 16px' }}
                >
                  {item.nombre}
                </button>
              ))}
            </div>
          </div>
          <Link to={"/contacto"}>CONTACTO</Link>
          <Link to={"/"}>
            <img src={backIcon} alt="Regresar" className="icon-svg" />
          </Link>
        </div>
      </div>

      <div className='center1' style={{ backgroundColor: 'black' }}>
        <div className='title' data-aos="fade-up">Quienes Somos</div>
        <div className='texto' data-aos="fade-left">
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

      <div className='titlee' data-aos="zoom-in">
        <p>Somos una compañía con:</p>
      </div>
      <div className='center_2' style={{ backgroundColor: 'black' }}>
        <div className='text cif' data-aos="fade-right">
          <p>Colaboradores<br /><br /><br />Unidades vendidas al por menor</p>
        </div>
        <div className='texto' data-aos="fade-left">
          <p>+400<br /><br />+30M</p>
        </div>
      </div>

      <div className='title' data-aos="fade-up">
        Nuestro Camino<br />Histórico
      </div>
      <div className="timeline-container" data-aos="flip-left">
        <div className="timeline-left" data-aos="flip-left">
          <div className='up' data-aos="flip-left">
            {timelineData.map((item, index) => (
              <div key={index} className={`timeline-year ${index === selectedTimeline ? 'active' : ''}`} onClick={() => setSelectedTimeline(index)}>
                {item.year}
              </div>
            ))}
          </div>
          <div className='down' data-aos="fade-up">
            <div className='text cif'>
              <div className='year title'>
                {timelineData[selectedTimeline].year}
              </div>
            </div>
            <p>{timelineData[selectedTimeline].description}</p>
          </div>
        </div>
        <div className="timeline-right" data-aos="zoom-in">
          <img src={timelineData[selectedTimeline].image} alt={timelineData[selectedTimeline].year} />
        </div>
      </div>

      <div className='title2' data-aos="fade-up">
        Nuestros Valores
      </div>
      <div className='sec-container'>
        <div className='sec-left'>
          {secData.map((item, index) => (
            <div
              key={index}
              className={`select-title ${index === selectedValue ? 'active' : ''}`}
              onClick={() => setSelectedValue(index)}
              data-aos={index === selectedValue ? 'fade-right' : undefined}
            >
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

export default Quienessomos;

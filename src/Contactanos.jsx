import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './contacto.css';
import backIcon from './assets/icons8-atras-48.png';
import 'aos/dist/aos.css';
import AOS from 'aos';

function Contacto() {

    const [menuAbierto, setMenuAbierto] = useState(false);

       const currentYear = new Date().getFullYear();
        useEffect(() => {
            AOS.init({
                duration: 500,
                once: false,
            });
        }, []);

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
                    <Link to={"/que-hacemos"}>QUE HACEMOS</Link>
                    <Link to={"/marcas-clientes"}>MARCAS & CLIENTES</Link>
                    <Link to={"/"}>
                        <img src={backIcon} alt="Regresar" className="icon-svg" />
                    </Link>
                </div>
            </div>

            <div className='contacto' data-aos="fade-up">
                <div className='contacto-left'>Contacto</div>
                <div className='contacto-right'>
                    <form className='form-contacto'>
                        <label>Nombre:
                            <input type='text' name='nombre' required />
                        </label>
                        <label>Apellido:
                            <input type='Apellido' name='email' required />
                        </label>
                        <label>Email:
                            <textarea name='Email' rows='4' required></textarea>
                        </label>
                        <label>Mensaje:
                            <textarea name='mensaje' rows='4' required></textarea>
                        </label>
                        <button type='submit'>Enviar</button>
                    </form>
                </div>
            </div>

            <div className='ubicacion' data-aos="fade-up">
                <div className='title-ubicacion'>Paseo de la Reforma 2620/401 Lomas Altas CP. 11950, CDMX</div>
                <div className='mapa-ubicacion'>
                    <iframe
                        title="Ubicación Google Maps"
                        src="https://www.google.com/maps?q=Paseo+de+la+Reforma+2620,+Lomas+Altas,+11950+CDMX&output=embed"
                        width="100%"
                        height="300"
                        style={{ border: 0, borderRadius: '12px', marginTop: '1rem' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
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

export default Contacto;

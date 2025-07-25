import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './contacto.css';
import backIcon from './assets/icons8-atras-48.png';
import 'aos/dist/aos.css';
import AOS from 'aos';

function Contacto() {

    const [menuAbierto, setMenuAbierto] = useState(false);
    const [dropdownOpen, setDropdownOpen] = React.useState(false);
    const dropdownTimeoutRef = React.useRef();

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
                <Link to={"/"}>
                    <div className='logo'></div>
                </Link>

                {/* Menú de navegación con clase condicional */}
                <div className={`text ${menuAbierto ? 'mostrar' : ''}`}>
                    <Link to="/quienes-somos" onClick={() => setMenuAbierto(false)}>QUIENES SOMOS</Link>
                    <Link to="/que-hacemos" onClick={() => setMenuAbierto(false)}>QUE HACEMOS</Link>
                    {/* Dropdown MARCAS & CLIENTES */}
                    <div
                        className="dropdown-marcas-clientes"
                        onMouseEnter={() => {
                            if (window.innerWidth >= 769) {
                                if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
                                setDropdownOpen(true);
                            }
                        }}
                        onMouseLeave={() => {
                            if (window.innerWidth >= 769) {
                                dropdownTimeoutRef.current = setTimeout(() => setDropdownOpen(false), 400);
                            }
                        }}
                        tabIndex={0}
                        onFocus={() => {
                            if (window.innerWidth >= 769) setDropdownOpen(true);
                        }}
                        onBlur={() => {
                            if (window.innerWidth >= 769) dropdownTimeoutRef.current = setTimeout(() => setDropdownOpen(false), 400);
                        }}
                    >
                        <Link to="/marcas-clientes" onClick={() => setMenuAbierto(false)}>MARCAS & CLIENTES</Link>
                        {/* Dropdown solo visible en desktop al hacer hover/focus, en mobile solo si menú abierto */}
                        <div
                            className="dropdown-content"
                            style={{
                                display:
                                    (window.innerWidth >= 769 && dropdownOpen)
                                        ? 'block'
                                        : (window.innerWidth < 769 && menuAbierto ? 'block' : 'none'),
                                position: window.innerWidth < 769 ? 'static' : 'absolute',
                                background: window.innerWidth < 769 ? 'none' : 'rgba(0, 0, 0, 0.95)',
                                boxShadow: window.innerWidth < 769 ? 'none' : undefined
                            }}
                        >
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
                                        setMenuAbierto(false);
                                        window.location.href = `/marcas-clientes?promesa=${item.idx}#mp`;
                                    }}
                                    style={{ color: 'white', cursor: 'pointer', textAlign: 'right' }}
                                >
                                    {item.nombre}
                                </button>
                            ))}
                        </div>
                    </div>
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
                            <input name='Email' rows='4' required></input>
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
                <div className='info-down'>
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
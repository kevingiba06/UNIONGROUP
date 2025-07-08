import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './contacto.css';
import backIcon from './assets/icons8-atras-48.png';

function Contacto() {

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
                    <Link to={"/que-hacemos"}>QUE HACEMOS</Link>
                    <Link to={"/marcas-clientes"}>MARCAS & CLIENTES</Link>
                    <Link to={"/"}>
                        <img src={backIcon} alt="Regresar" className="icon-svg" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Contacto;

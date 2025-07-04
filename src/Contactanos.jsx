import React from 'react';
import { Link } from 'react-router-dom';
import './contacto.css';
import backIcon from './assets/icons8-atras-48.png';

function Contacto() {
    return (
        <div className="home-container">
            <div className='logo-text'>
                <Link to={"/"}>
                    <div className="logo"></div>
                </Link>
                <div className='text'>
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

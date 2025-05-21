import React from 'react';
import './styleshome.css';
import { Link } from 'react-router-dom';
import sampleImage from './assets/fondojlo.jpg';

function HomePage() {
    const currentYear = new Date().getFullYear();
    return (
        <div className="home-container">
            <div className='logo-text'>
                <div className='logo'></div>
                <div className='text'>
                    <Link to={"/quienes-somos"}>QUIENES SOMOS</Link>
                    <Link to={"/que-hacemos"}>QUE HACEMOS</Link>
                    <Link to={"/marcas-clientes"}>MARCAS & CLIENTES</Link>
                    <Link to={"/contacto"}>CONTACTO</Link>
                </div>
            </div>

            {/* Nuevo contenedor para la imagen */}
            <div className="image-container">
                <img src={sampleImage} alt="Imagen de muestra" className="home-image" />
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

export default HomePage;


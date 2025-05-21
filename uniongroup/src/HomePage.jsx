import React from 'react';
import './styleshome.css';
import { Link } from 'react-router-dom';
import sampleImage from './assets/fondojlo.jpg';

function HomePage() {
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
        </div>
    );
}

export default HomePage;


import { useState, useEffect } from 'react';
import './styleshome.css';
import { Link } from 'react-router-dom';
import fondoJlo from './assets/fondojlo.jpg';
import billabong from './assets/BILLABONG.jpg';
import imagen3 from './assets/rox.jpg';

const slides = [
    { src: fondoJlo, texto: "Una Marca Es Una Promesa", botonTexto: "JLO BY JENNIFER LOPEZ" },   // <-- agregado botonTexto
    { src: billabong, texto: "Una Marca Es Una Promesa", botonTexto: "BILLABONG" },      // <-- agregado botonTexto
    { src: imagen3, texto: "Una Marca Es Una Promesa", botonTexto: "ROX BRAND" },                 // <-- agregado botonTexto
];


function HomePage() {
    const currentYear = new Date().getFullYear();
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

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

            <div className="slideshow-container">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`slide ${index === currentIndex ? 'active' : ''}`}
                    >
                        <img src={slide.src} alt={`Imagen ${index + 1}`} className="home-image" />
                        <div className="overlay"></div>
                        <div className="textojlo">{slide.texto}</div>

                        {/* Botón visible en todos los slides */}
                        {index === currentIndex && (
                            <div className="brand-button">{slide.botonTexto}</div>    // <-- botón con texto dinámico solo en slide activo
                            
                        )}

                    </div>
                ))}
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

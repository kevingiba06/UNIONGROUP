import { useState, useEffect } from 'react';
import './styleshome.css';
import { Link } from 'react-router-dom';
import fondoJlo from './assets/fondojlo.jpg';
import billabong from './assets/BILLABONG.jpg';
import imagen3 from './assets/rox.jpg';
import reebok from './assets/reebokhome.jpg';
import logo_billa from './assets/logo_billabong.svg';
import logo_jlo from './assets/logo_jlo.svg';
import logo_reebok from './assets/logo_reebok.svg';
import logo_roxy from './assets/logo_roxy.svg';
import logo_members from './assets/logo_members.svg';
import logo_nautica from './assets/logo_nautica.svg';
import logo_polo from './assets/logo_polo.svg';
import logo_umbro from './assets/logo_umbro.svg';
import logo_jeep from './assets/logo_jeep.svg';
import logo_rvca from './assets/logo_rvca.svg';
import logo_dc from './assets/logo_dc.svg';
import logo_quicksilver from './assets/logo_quicksilver.svg';
import logo_marvel from './assets/logo_marvel.svg';
import logo_disney from './assets/logo_disney.svg';
import logo_brook from './assets/logo_brook.svg';
import logo_helys from './assets/logo_helys.svg';
import logo_altec from './assets/logo_altec.svg';
import logo_shaq from './assets/logo_shaq.svg';
import logo_cat from './assets/logo_cat.svg';

const slides = [
    { src: fondoJlo, texto: "Una Marca Es Una Promesa", botonTexto: "JLO BY JENNIFER LOPEZ", icons: [logo_jlo] },   // <-- agregado botonTexto
    { src: billabong, texto: "Una Marca Es Una Promesa", botonTexto: "BILLABONG", icons: [logo_billa] },      // <-- agregado botonTexto
    { src: imagen3, texto: "Una Marca Es Una Promesa", botonTexto: "ROX BRAND", icons: [logo_roxy] },
    { src: reebok, texto: "Una Marca Es Una Promesa", botonTexto: "REEBOK", icons: [logo_reebok] },                 // <-- agregado botonTexto
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
                            <>
                                <div className="brand-button">{slide.botonTexto}</div>
                                                                {/* Íconos dinámicos por slide */}
                                {slide.icons && slide.icons.map((icon, i) => (
                                    <img
                                        key={i}
                                        src={icon}
                                        alt={`icono-${i}`}
                                        className={`slide-icon icon-${i}`}
                                    />
                                ))}
                            </>
                        )}

                    </div>
                ))}

                <div className='svg-carousel'>
                    <div className='carousel-track'>
                        {[logo_billa, logo_roxy, logo_jlo, logo_reebok, logo_members, logo_nautica, logo_polo, logo_umbro, logo_jeep, logo_rvca, logo_dc, logo_quicksilver, logo_marvel, logo_disney, logo_brook, logo_helys, logo_altec, logo_shaq, logo_cat,
                        logo_billa, logo_roxy, logo_jlo, logo_reebok, logo_members, logo_nautica, logo_polo, logo_umbro, logo_jeep, logo_rvca, logo_dc, logo_quicksilver, logo_marvel, logo_disney, logo_brook, logo_helys, logo_altec, logo_shaq, logo_cat].map((logo, index) => (
                            <img key={index} src={logo} alt={`logo-${index}`} className="carousel-logo" />
                        ))}
                    </div>
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

export default HomePage;

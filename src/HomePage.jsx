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
import logo_board from './assets/LOGO_BOARD.svg';
import logo_aero from './assets/AEROPOSTALE.svg';

const slides = [
    { src: fondoJlo, texto: "Una Marca Es Una Promesa", botonTexto: "JLO BY JENNIFER LOPEZ", icons: [logo_jlo] },   // <-- agregado botonTexto
    { src: billabong, texto: "Una Marca Es Una Promesa", botonTexto: "BILLABONG", icons: [logo_billa] },      // <-- agregado botonTexto
    { src: imagen3, texto: "Una Marca Es Una Promesa", botonTexto: "ROX BRAND", icons: [logo_roxy] },
    { src: reebok, texto: "Una Marca Es Una Promesa", botonTexto: "REEBOK", icons: [logo_reebok] },                 // <-- agregado botonTexto
];


function HomePage() {
    const currentYear = new Date().getFullYear();
    const [currentIndex, setCurrentIndex] = useState(0);
    const logosConLinks = [
        { logo: logo_billa, url: 'https://www.billabong.com/' },
        { logo: logo_roxy, url: 'https://www.roxy.com' },
        { logo: logo_jlo, url: 'https://www.coppel.com/jennifer-lopez' },
        { logo: logo_reebok, url: 'https://www.reebok.mx/' },
        { logo: logo_members, url: 'https://membersonly.com/?srsltid=AfmBOooWCoqlp3cb10_EFUnchiRN3SksewJaDV50wj67fbbG3VPxLBfn' },
        { logo: logo_nautica, url: 'https://nauticamexico.com/?srsltid=AfmBOooY1zCZ_s0-B8gnsORyl0yRRtOQaqPEC0-5gWK8I0IZWYpspzsK' },
        { logo: logo_polo, url: 'https://www.coppel.com/york-team-polo-club' },
        { logo: logo_umbro, url: 'https://www.umbro.com/es/' },
        { logo: logo_jeep, url: 'https://www.jeep-outfitter.com/es_es' },
        { logo: logo_rvca, url: 'https://www.rvca.com/?srsltid=AfmBOoqWGM-hcyKc7AgrkWr-61r2DBq4svbVgHd58ZuF57PDqWAYu5l5' },
        { logo: logo_dc, url: 'https://dcshoes.mx/?gad_source=1&gad_campaignid=22331569632&gbraid=0AAAAA-bjNF6NzEnFgTKqIJeARzGNRTn6f&gclid=Cj0KCQjwxdXBBhDEARIsAAUkP6g06kUQSM9D5Guf38bLgXQDNGg8C2K7vnVfRZiN_WcNajviRbQRs78aAgk4EALw_wcB' },
        { logo: logo_quicksilver, url: 'https://www.quiksilver.com/' },
        { logo: logo_marvel, url: 'https://marvel.com' },
        { logo: logo_disney, url: 'https://disney.com' },
        { logo: logo_brook, url: 'https://www.brookstone.com/?srsltid=AfmBOoozHpln3v7gbJhrQ-HeTBlr7epk8wBs04DJ_AXd60uD0SP1pOnR' },
        { logo: logo_helys, url: 'https://heelys.com/pages/mexico?srsltid=AfmBOorfYRog2uNPlh9o5jQ7cj63OUC3IcVIu1FyeuPVXSstgT2hZRur' },
        { logo: logo_altec, url: 'https://www.alteclansing.com/collections/speakers?srsltid=AfmBOoqjFsu20_zJCSHP72PGcdbnU0mEpDYYOXe35S64zZqkuwcWWrnn' },
        { logo: logo_shaq, url: 'https://shaq.com/pages/shaq-footwear' },
        { logo: logo_cat, url: 'https://catfootwear.com.mx/?gad_source=1&gad_campaignid=21351108413&gbraid=0AAAAAoMoTsjrd2Qu9P7fM1NS666GVQA_E&gclid=Cj0KCQjwxdXBBhDEARIsAAUkP6gEqTm5BTdi91r1Fkh9tAJ6ff_T0c89mfl3xtJzxUuP2HRVmduR6TkaAgTGEALw_wcB' },
        { logo: logo_board, url: 'https://www.boardriders.eu'},
        { logo: logo_aero, url: 'https://www.aeropostale.com/?srsltid=AfmBOoqrCatki6WuMIDuTYdrA_T5oKpcWs5N7YqYHC5L1IexrmRjJlTv'},
    ];

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
                        {logosConLinks.concat(logosConLinks).map((item, index) => (
                            <a key={index} href={item.url} target='_blank' rel='noopener noreferrer'>
                                <img src={item.logo} alt={`logo-${index}`} className="carousel-logo" />
                            </a>
                        ))}
                    </div>
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

export default HomePage;

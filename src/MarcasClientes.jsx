import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link
import 'aos/dist/aos.css';
import AOS from 'aos';
import './marcasyclientes.css';
import backIcon from './assets/icons8-atras-48.png';
import collage from './assets/COLLAGE.jpg';  
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


const logos = [
    /*0*/
    { logo: logo_billa, url: 'https://www.billabong.com/' },
    /*1*/
    { logo: logo_roxy, url: 'https://www.roxy.com' },
    /*2*/
    { logo: logo_jlo, url: 'https://www.coppel.com/jennifer-lopez' },
    /*3*/
    { logo: logo_reebok, url: 'https://www.reebok.mx/' },
    /*4*/
    { logo: logo_members, url: 'https://membersonly.com/?srsltid=AfmBOooWCoqlp3cb10_EFUnchiRN3SksewJaDV50wj67fbbG3VPxLBfn' },
    /*5*/
    { logo: logo_nautica, url: 'https://nauticamexico.com/?srsltid=AfmBOooY1zCZ_s0-B8gnsORyl0yRRtOQaqPEC0-5gWK8I0IZWYpspzsK' },
    /*6*/
    { logo: logo_polo, url: 'https://www.coppel.com/york-team-polo-club' },
    /*7*/
    { logo: logo_umbro, url: 'https://www.umbro.com/es/' },
    /*8*/
    { logo: logo_jeep, url: 'https://www.jeep-outfitter.com/es_es' },
    /*9*/
    { logo: logo_rvca, url: 'https://www.rvca.com/?srsltid=AfmBOoqWGM-hcyKc7AgrkWr-61r2DBq4svbVgHd58ZuF57PDqWAYu5l5' },
    /*10*/
    { logo: logo_dc, url: 'https://dcshoes.mx/?gad_source=1&gad_campaignid=22331569632&gbraid=0AAAAA-bjNF6NzEnFgTKqIJeARzGNRTn6f&gclid=Cj0KCQjwxdXBBhDEARIsAAUkP6g06kUQSM9D5Guf38bLgXQDNGg8C2K7vnVfRZiN_WcNajviRbQRs78aAgk4EALw_wcB' },
    /*11*/
    { logo: logo_quicksilver, url: 'https://www.quiksilver.com/' },
    /*12*/
    { logo: logo_marvel, url: 'https://marvel.com' },
    /*13*/
    { logo: logo_disney, url: 'https://disney.com' },
    /*14*/
    { logo: logo_brook, url: 'https://www.brookstone.com/?srsltid=AfmBOoozHpln3v7gbJhrQ-HeTBlr7epk8wBs04DJ_AXd60uD0SP1pOnR' },
    /*15*/
    { logo: logo_helys, url: 'https://heelys.com/pages/mexico?srsltid=AfmBOorfYRog2uNPlh9o5jQ7cj63OUC3IcVIu1FyeuPVXSstgT2hZRur' },
    /*16*/
    { logo: logo_altec, url: 'https://www.alteclansing.com/collections/speakers?srsltid=AfmBOoqjFsu20_zJCSHP72PGcdbnU0mEpDYYOXe35S64zZqkuwcWWrnn' },
    /*17*/
    { logo: logo_shaq, url: 'https://shaq.com/pages/shaq-footwear' },
    /*18*/
    { logo: logo_cat, url: 'https://catfootwear.com.mx/?gad_source=1&gad_campaignid=21351108413&gbraid=0AAAAAoMoTsjrd2Qu9P7fM1NS666GVQA_E&gclid=Cj0KCQjwxdXBBhDEARIsAAUkP6gEqTm5BTdi91r1Fkh9tAJ6ff_T0c89mfl3xtJzxUuP2HRVmduR6TkaAgTGEALw_wcB' },
    /*19*/
    { logo: logo_board, url: 'https://www.boardriders.eu' },
    /*20*/
    { logo: logo_aero, url: 'https://www.aeropostale.com/?srsltid=AfmBOoqrCatki6WuMIDuTYdrA_T5oKpcWs5N7YqYHC5L1IexrmRjJlTv' },
];

const marcaslist = [
    { titulo: "VER TODAS", image: collage, logos: logos },
    { titulo: "FULL BRAND MANAGEMENT", image: collage, logos: [logos[3], logos[11], logos[6], logos[2], logos[1], logos[9], logos[10], logos[0]] },
    { titulo: "LICENCIAS", image: collage, logos: [logos[20], logos[4], logos[15], logos[13], logos[18], logos[8], logos[5], logos[7], logos[12], logos[17]] },
    { titulo: "DISTRIBUCIÓN", image: collage, logos: [logos[16], logos[14]] },
];



function MarcasyClientes() {
    const [selectedmarca, setSelectedmarca] = useState(0);

    const currentYear = new Date().getFullYear();
    useEffect(() => {
        AOS.init({
            duration: 500,
            once: false,
        });
    }, []);

    return (
        <div className="home-container">
            <div className="logo-text">
                <div className="logo"></div>
                <div className="text">
                    <Link to={"/quienes-somos"}>QUIENES SOMOS</Link>
                    <Link to={"/que-hacemos"}>QUE HACEMOS</Link>
                    <Link to={"/contacto"}>CONTACTO</Link>
                    <Link to={"/"}>
                        <img src={backIcon} alt="Regresar" className="icon-svg" />
                    </Link>
                </div>
            </div>

            <div className='center-left-align'>
                <h1 className='marcas' >Marcas</h1>
                <div className='info' >
                    A lo largo de los años, Union Group ha forjado sólidas alianzas con marcas y clientes de renombre a nivel global. Estas<br /> colaboraciones han permitido a la compañía expandir su alcance y fortalecer su reputación en diversos mercados. Union<br /> Group se enorgullece de trabajar con marcas líderes, creando sinergias que impulsan el crecimiento y la innovación continua.<br /><br />
                    Union Group se enorgullece de trabajar con marcas líderes, creando sinergias que impulsan el crecimiento y la innovación continua.
                </div>
                <img className="img" src={collage} alt="Collage" />
            </div>

            <div className='marcas-container'>
                <div className='marcas-left' data-aos="fade-up">
                    <img src={marcaslist[selectedmarca].image} alt={marcaslist[selectedmarca].titulo} />
                </div>
                <div className='marcas-right' data-aos="fade-up">
                    <div className='marcas-up'>
                        {marcaslist.map((item, index) => (
                            <div
                                key={index}
                                className={`marca-select ${index === selectedmarca ? 'active' : ''}`}
                                onClick={() => setSelectedmarca(index)}
                            >
                                {item.titulo}
                            </div>
                        ))}
                    </div>
                    <div className='marcas-down-table'>
                        {marcaslist[selectedmarca].logos && marcaslist[selectedmarca].logos.map((logo, idx) => (
                            <a key={idx} href={logo.url} target="_blank" rel="noopener noreferrer" className="logo-link-table">
                                <img src={logo.logo} alt="Logo" className="logo-img-table" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className='info-white'>
                <div className='title white'>Full Brand Management</div>
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

export default MarcasyClientes;

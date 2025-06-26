import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link
import './marcasyclientes.css';
import collage from './assets/COLLAGE.jpg'; // Asegúrate de que la ruta sea correcta

function MarcasyClientes() {
    return (
        <div className="home-container">
            <div className="logo-text">
                <div className="logo"></div>
                <div className="text">
                    <Link to={"/quienes-somos"}>QUIENES SOMOS</Link>
                    <Link to={"/que-hacemos"}>QUE HACEMOS</Link>
                    <Link to={"/contacto"}>CONTACTO</Link>
                    <Link to={"/"}>REGRESAR</Link>
                </div>
            </div>

            <div className='center-left-align'>
                <h1 className='marcas' >Que hacemos</h1>
                <div className='info' >
                    A lo largo de los años, Union Group ha forjado sólidas alianzas con marcas y clientes de renombre a nivel global. Estas colaboraciones han permitido a la compañía expandir su alcance y fortalecer su reputación en diversos mercados. Union Group se enorgullece de trabajar con marcas líderes, creando sinergias que impulsan el crecimiento y la innovación continua.<br />
                    Union Group se enorgullece de trabajar con marcas líderes, creando sinergias que impulsan el crecimiento y la innovación continua.
                </div>
                <img className="img" src={collage} alt="Collage" />
            </div>

            <div className='center'>
                <h1 className='marcas' >Que hacemos</h1>
                <div className='info' >
                    A lo largo de los años, Union Group ha forjado sólidas alianzas con marcas y clientes de renombre a nivel global. Estas colaboraciones han permitido a la compañía expandir su alcance y fortalecer su reputación en diversos mercados. Union Group se enorgullece de trabajar con marcas líderes, creando sinergias que impulsan el crecimiento y la innovación continua.<br />
                    Union Group se enorgullece de trabajar con marcas líderes, creando sinergias que impulsan el crecimiento y la innovación continua.
                </div>
            </div>
        </div>



    );

}

export default MarcasyClientes;

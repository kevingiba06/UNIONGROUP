import './App.css';
import fondo from './assets/fondo.jpg'; // Asegúrate de agregar tu imagen en `src/assets`
 
function App() {
  return (
    <div className="hero" style={{ backgroundImage: `url(${fondo})` }}>
      <div className="overlay">
        <h1>Una Marca Es Una Promesa</h1>
        <div className="logos">
          <img src="disney.png" alt="Disney" />
          <img src="marvel.png" alt="Marvel" />
          <img src="roxy.png" alt="Roxy" />
          {/* ...agrega más logos aquí */}
        </div>
      </div>
    </div>
  );
}
 
export default App;
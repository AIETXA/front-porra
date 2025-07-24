import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

const apiUrl = import.meta.env.VITE_API_URL;



function NavBar() {
    const [ menuOpen, setMenuOpen ] = useState(false);
    
    return ( 
    <nav className="nb" style={{ width: "100%", padding: "1rem" }}>
        <div className="nb_izquierda"> 
            La Porra<br />
            del<br />
            Monte</div>
        <div className="nb_centro">
            <button className='burger' onClick={() => setMenuOpen(!menuOpen)}>&#9776;</button>
        {menuOpen && (
          <div className="menu-desplegable">
            <a href="#inicio">Inicio</a>
            <a href="#bases">Bases y condiciones</a>
            <a href="#corredores">Corredores</a>
            <a href="#etapas">Etapas</a>
          </div>
        )}
        </div>

        <div className="nb_derecha">
            <Link to="/registro" className="btn-registro">Registrarme</Link>
            <button onClick={() => window.location.href=`${apiUrl}/admin/login`} className="btn-inicio">Iniciar sesión</button>
        </div>
    </nav>
)
}

export default NavBar
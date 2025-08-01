import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';





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
            <Link to="/dashboard/inicio" onClick={() => setMenuOpen(false)}>Inicio</Link>
            <Link to="/dashboard/bases" onClick={() => setMenuOpen(false)}>Bases y condiciones</Link>
            <Link to="/dashboard/corredores" onClick={() => setMenuOpen(false)}>Corredores</Link>
            <Link to="/dashboard/etapas" onClick={() => setMenuOpen(false)}>Etapas</Link>
          </div>
        )}
        </div>

        <div className="nb_derecha">
            <Link to="/registro" className="btn-registro">Registrarme</Link>
            <Link to="/admin/login" className="btn-inicio">Iniciar sesión</Link>

        </div>
    </nav>
)
}

export default NavBar
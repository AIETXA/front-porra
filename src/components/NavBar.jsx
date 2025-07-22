import { useState } from 'react'
import '../styles/NavBar.css'


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
            <button className="btn-registro">Registrarme</button>
            <button className="btn-inicio">Iniciar sesión</button>
        </div>
    </nav>
)
}

export default NavBar
import '../styles/NavBar.css'


function NavBar() {
return ( 
    <nav className="nb">
        <div className="nb_izquierda">La Porra del Monte</div>
        <div className="nb_centro">=</div>
        <div className="nb_derecha">
            <button className="btn-registro">Registrarme</button>
            <button className="btn-inicio">Iniciar sesión</button>
        </div>
    </nav>
)
}

export default NavBar
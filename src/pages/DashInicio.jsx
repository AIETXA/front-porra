import { Link } from 'react-router-dom'
import '../styles/Inicio.css'



const Inicio = () => (   
    <section className="presentacion">     
        <h1>Bienvenidos a la Porra del Monte</h1>     
        <p>Participá eligiendo tus corredores favoritos del Tour...</p>
        <p>Ahora podes hacer la cantidad de listas que quieras</p>
        <p><strong>¡Animáte, hay grandes premios!</strong></p>
        <Link to="/dashboard/bases"><button className="btn-bases">Bases y condiciones</button></Link>  
    </section> );  

export default Inicio; 



import './App.css'
import RoutesApp from './routes/routesApp'
import NavBar from './components/NavBar'
import './styles/NavBar.css'

function App() {
 

  return (
    <>
     <div className="nb nb_izquierda">
      Hola, esto debería verse con fondo amarillo y texto negro
    </div>
     <RoutesApp/>
     <NavBar/>
    </>
  )
}

export default App

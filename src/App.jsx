
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesApp from './routes/routesApp'
import NavBar from './components/NavBar'

import './styles/NavBar.css'
import './App.css'

function App() {
 

  return (
    <Router>
      <NavBar/>
     
      <RoutesApp/>
          
     
    </Router>
  )
}

export default App

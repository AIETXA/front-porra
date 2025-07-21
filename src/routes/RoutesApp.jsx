import { BrowserRouter as Router, Routes, Route, Link, createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home';
import Login from '../pages/login';
import Porras from '../pages/porras';


const RoutesApp = () => {
  

    return (
        <Router>
         
            <nav>
                <Link to={"/"}>Home</Link>
                <Link to={"/Login"}>Login</Link>
                <Link to={"/Porras"}>Porras</Link>
   
            </nav>
            <div className='content'>
                <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/Login' element={<Login/>}/>
                        <Route path='/Porras' element={<Porras/>}/>
                </Routes>
            </div>    
     
        </Router>

    )
}
   
export default RoutesApp
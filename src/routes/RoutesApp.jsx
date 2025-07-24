
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Login from '../pages/login';
import Porras from '../pages/porras';
import VerifyMagicLink from '../components/user/VerifyMagicLink';
import Registrarme from '../components/user/UserLogin';
import AdminEtapas from '../components/admin/etapas';

const RoutesApp = () => {
  
    return (
       <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/registro' element={<Registrarme/>}/>
            <Route path="/admin/etapas" element={<AdminEtapas />} />
            <Route path='/Login' element={<Login/>}/>
            <Route path='/Porras' element={<Porras/>}/>
            <Route path="/verify" element={<VerifyMagicLink />} />
       </Routes>
                       
       

    )
}
   
export default RoutesApp
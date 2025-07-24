
import { Routes, Route } from 'react-router-dom';
import VerifyMagicLink from '../components/user/VerifyMagicLink';
import Registrarme from '../components/user/UserLogin';
import AdminEtapas from '../components/admin/etapas';
import Dashboard from '../pages/Dashboard';

const RoutesApp = () => {
  
    return (
       <Routes>
            
            
            <Route path="/" element={<Dashboard />} />
            <Route path='/registro' element={<Registrarme/>}/>
            <Route path="/admin/etapas" element={<AdminEtapas />} />
            <Route path="/verify" element={<VerifyMagicLink />} />
       </Routes>
                       
       

    )
}
   
export default RoutesApp
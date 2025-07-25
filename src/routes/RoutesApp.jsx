
import { Routes, Route } from 'react-router-dom';
import VerifyMagicLink from '../components/user/VerifyMagicLink';
import Registrarme from '../components/user/UserLogin';
import AdminEtapasTabla from '../components/admin/Etapas'
import Dashboard from '../pages/Dashboard';
import ProtegerAdmin from '../components/admin/ProtegerAdmin';
import AdminLogin from '../pages/admin/Login'
import AdminPanel from '../pages/admin/Panel';
import AdminEtapaDetalle from '../components/admin/DetalleEtapas';
import EtapasEnDashboard from '../pages/DashEtapas';

const RoutesApp = () => {
  
    return (
       <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/etapas" element={<EtapasEnDashboard/>}/>  
            
            
            <Route path="/registro" element={<Registrarme />} />
            <Route path="/verify" element={<VerifyMagicLink />} />

            <Route path="/admin/login" element={<AdminLogin />} /> 
      
            <Route path="/admin" element={<ProtegerAdmin />}>
                <Route path="" element={<AdminPanel/>}/>
                    <Route path="etapas" element={<AdminEtapasTabla />} />
                    <Route path="etapas/:id" element={<AdminEtapaDetalle/>}/>
                   
           
    
        
      </Route>
    </Routes>
                       
       

    )
}
   
export default RoutesApp
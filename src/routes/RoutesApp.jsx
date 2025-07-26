
import { Routes, Route } from 'react-router-dom';
import VerifyMagicLink from '../components/user/VerifyMagicLink';
import Registrarme from '../components/user/UserLogin';

import Dashboard from '../pages/Dashboard';
import ProtegerAdmin from '../components/admin/ProtegerAdmin';
import AdminLogin from '../pages/admin/Login'
import AdminPanel from '../pages/admin/Panel';
import AdminEtapaDetalle from '../components/admin/DetalleEtapas';
import EtapasEnDashboard from '../pages/DashEtapas';
import Corredores from '../pages/DashCorredores';
import Inicio from '../pages/DashInicio';
import BasesyCondiciones from '../pages/DashBases';
import UserHome from '../components/user/Home';
import EtapasAdminTabla from '../components/admin/EtapasTabla';



const RoutesApp = () => {
  
    return (
       <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route index element={<Inicio />} />
            <Route path="/dashboard/inicio" element={<Inicio />} />
            <Route path="/dashboard/bases" element={<BasesyCondiciones/>}/>
            <Route path="/dashboard/etapas" element={<EtapasEnDashboard esVistaUsuario={true}/>}/>  

            <Route path="/dashboard/corredores" element={<Corredores/>}/>
            
            <Route path="/registro" element={<Registrarme />} />
            <Route path="/verify" element={<VerifyMagicLink />} />
            <Route path="/home" element={<UserHome/>}/>

            <Route path="/admin/login" element={<AdminLogin />} /> 
      
            <Route path="/admin" element={<ProtegerAdmin />}>
                <Route path="" element={<AdminPanel/>}/>
                    <Route path="etapas" element={<EtapasAdminTabla/>}/>
                    <Route path="etapas/:id" element={<AdminEtapaDetalle/>}/>
                    <Route path="corredores" element={<Corredores/>}/>
                   
           
    
        
      </Route>
    </Routes>
                       
       

    )
}
   
export default RoutesApp
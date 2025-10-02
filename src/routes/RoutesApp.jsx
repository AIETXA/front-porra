
import { Routes, Route } from 'react-router-dom';
import Registrarme from '../components/user/Registro';
import IniciarSesion from '../components/user/Login';
import DashboardUser from '../components/user/DashUser';
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
import FormularioPorra from '../components/user/Formulario';
import AdminPorras from '../components/admin/TodasLasPorras';
import Ranking from '../components/Ranking';



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
            <Route path="/login" element={<IniciarSesion />} />
            <Route path="/home" element={<UserHome/>}/>
            <Route path="/formulario" element={<FormularioPorra/>}/>
            <Route path="/dashboard/user" element={<DashboardUser/>}/>

            <Route path="/admin/login" element={<AdminLogin />} /> 
      
            <Route path="/admin" element={<ProtegerAdmin />}>
                <Route index element={<AdminPanel/>}/>
                <Route path="etapas" element={<EtapasAdminTabla/>}/>
                <Route path="etapas/:id" element={<AdminEtapaDetalle/>}/>
                <Route path="corredores" element={<Corredores/>}/>
                <Route path="listas" element={<AdminPorras/>}/>
                <Route path="ranking" element={<Ranking/>}/>
           
    
        
      </Route>
    </Routes>
                       
       

    )
}
   
export default RoutesApp
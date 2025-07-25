
import { Routes, Route } from 'react-router-dom';
import VerifyMagicLink from '../components/user/VerifyMagicLink';
import Registrarme from '../components/user/UserLogin';
import AdminEtapas from '../pages/admin/Etapas'
import Dashboard from '../pages/Dashboard';
import ProtegerAdmin from '../components/admin/ProtegerAdmin';
import AdminLogin from '../pages/admin/Login'
import FormularioResultados from '../pages/admin/CargarResultados';
import AdminPanel from '../pages/admin/Panel';


const RoutesApp = () => {
  
    return (
       <Routes>
            <Route path="/" element={<Dashboard />} />

            <Route path="/registro" element={<Registrarme />} />
            <Route path="/verify" element={<VerifyMagicLink />} />

            <Route path="/admin/login" element={<AdminLogin />} /> 
      
            <Route path="/admin" element={<ProtegerAdmin />}>
                <Route element={<AdminPanel/>}/>
                    <Route path="etapas" element={<AdminEtapas />} />
                    <Route path="etapas/:id" element={<FormularioResultados/>}/>
           
    
        
      </Route>
    </Routes>
                       
       

    )
}
   
export default RoutesApp
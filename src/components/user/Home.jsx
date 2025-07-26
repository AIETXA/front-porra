import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FiPlusCircle } from 'react-icons/fi';

function UserHome() {
    const navigate = useNavigate();

    const [existePorra] = useState(false)
    const[miPorra] = useState(null)

    useEffect(() => {
        const token = localStorage.getItem('authToken');

        if(!token) {
            navigate('/registro')
            return;
        }
       
    async function verificarSiHayPorra() {
        const res = await fetch('http://localhost:3000/api/porras/me', {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            
        const data = await res.json();
        setExistePorra(data?.porra ? true : false);
        setMiPorra(data?.porra || null);
  }
  verificarSiHayPorra
 }, [navigate]);

if(!existePorra) {

    return (
        <>
        <h2 className="bienvenido">Bienvenido a tu página</h2>
        <div className="mas">
            <div style={{
                width: '400px',
                height: '300px',
                border: '2px solid black',
                borderRadius: '8px',
                alignContent: 'center'
            }}>
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>  
            <FiPlusCircle 
                size={100} 
                color="#d7c235" 
                alignContent='center'
                onClick={() =>navigate('/formulario')} 
                style={{ cursor: 'pointer'}}
                />
            <p style={{ fontSize: '18px', marginTop: '10px' }}>Hacé tu porra</p>
            </div> 
            </div>
        </div>
        <button className='cerrar' onClick={() => {
            localStorage.removeItem('authToken');
            navigate('/registro');}}>Cerrar sesión</button>
        
        </>
    
)
}
};

export default UserHome
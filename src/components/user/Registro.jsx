import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Registrarme() {
    const navigate = useNavigate();

    const [ email, setEmail ] = useState('')
    const [ mensaje, setMensaje ] = useState('')
    const [ devLink, setDevLink ] = useState('');
    
    async function handleSubmit(e) {
        e.preventDefault();
        setMensaje('');
        setDevLink('');
    
        try {
        const apiUrl = import.meta.env.VITE_API_URL;
       
 
        const res = await fetch(`${apiUrl}/api/user/login`, {
           method: 'POST',
           headers: {'Content-Type':'application/json'},
           body: JSON.stringify({ email })
        });

        const data = await res.json();
          setMensaje(data.message);

          if (data.developmentLink) {
            setDevLink(data.developmentLink);
          }
          
        } catch (error) {
        console.error(error);
        setMensaje('Error en la conexión')
        
    }

}

async function handleLoginDemo() {
    setMensaje('Iniciando sesión demo...');

    localStorage.setItem('authToken', 'invitado_demo_porra');
    

    navigate('/dashboard/user'); 
}
return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
                type='email'
                placeholder='Ingresa tu correo electrónico'
                value={email}
                onChange={(e) => setEmail(e.target.value) }
                required
            />
           
            <button type='submit'>Registrarme</button>
            
        </form>
        {mensaje && <p>{mensaje}</p>}


        <div style={{ marginTop: '25px', textAlign: 'center' }}>
            <p style={{ margin: '0 0 10px 0', fontWeight: 'bold', color: 'rgb(227, 204, 57)' }}>
                👀 ¿Estás revisando mi CV?
            </p>
            <button 
                type="button" 
                onClick={handleLoginDemo}
                style={{ 
                    backgroundColor: 'rgb(227, 204, 57)', 
                    color: 'white', 
                    padding: '12px 20px', 
                    border: 'none', 
                    borderRadius: '4px', 
                    cursor: 'pointer', 
                    fontWeight: 'bold', 
                    width: '100%', 
                    fontSize: '15px' 
                }}
            >
                Entrar en Modo Demo 🚀
            </button>
        </div>
        {devLink && (
            <div style={{ marginTop: '20px', padding: '15px', border: '2px dashed #ff9800', borderRadius: '5px', backgroundColor: '#fff3e0' }}>
                <p style={{ color: '#e65100', fontWeight: 'bold', margin: '0 0 10px 0' }}>
                    🛠️ MODO DESARROLLO (Simulador de Email):
                </p>
                <p style={{ fontSize: '14px', margin: '0 0 10px 0' }}>
                    Como Resend gratis está limitado, hacé clic abajo para simular que entrás desde el correo:
                </p>
                <a 
                    href={devLink} 
                    style={{ display: 'inline-block', padding: '10px 15px', backgroundColor: '#e65100', color: 'white', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold' }}
                >
                    Ingresar directo a la App 🚀
                </a>
            </div>
        )}
    </div>
);
   
}

export default Registrarme; 


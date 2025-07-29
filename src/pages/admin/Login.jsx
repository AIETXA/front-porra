import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AdminLogin() {
  const [mensaje, setMensaje] = useState('')
  const navigate = useNavigate()
  const apiUrl = import.meta.env.VITE_API_URL;


const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const admin = formData.get('admin')
    const pass = formData.get('pass')


try {
    const res = await fetch(`${apiUrl}/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ admin, pass })
    });
console.log('Respuesta status:', res.status)
    if(!res.ok) {
        setMensaje('Credenciales erroneas');
        return;
    }
    const data = await res.json();
    localStorage.setItem('token', data.token);
    navigate('/admin');

    } catch (err) {
    console.error(err);
    setMensaje('Error en el servidor');
    }
}




return (
 <div style={{ padding: '2rem' }}>
        <h2>Iniciar Sesión</h2>
      
        <form onSubmit={handleSubmit}>
            <input type="text" name="admin" placeholder="Usuario admin" required />
            <input type="password" name="pass" placeholder="Contraseña" required />
            <button type="submit">Entrar</button>
        </form>
     {mensaje && <p style={{color:'red'}}>{mensaje}</p>}

    </div>
)

}

export default AdminLogin
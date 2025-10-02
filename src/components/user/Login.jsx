import { useState } from 'react';

function IniciarSesion() {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ mensaje, setMensaje ] = useState('')



async function handleSubmit(e) {
        e.preventDefault();
        setMensaje('');
    
    try {
    const apiUrl = import.meta.env.VITE_API_URL;
       
 
        const res = await fetch(`${apiUrl}/api/user/login`, {
           method: 'POST',
           headers: {'Content-Type':'application/json'},
           body: JSON.stringify({email, password})
        })

        const data = await res.json();
          setMensaje(data.message);
          
        } catch (error) {
        console.error(error);
        setMensaje('Error en la conexión')

    }
}
return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
            type='email'
            placeholder='Correo electrónico'
            value={email}
            onChange={(e) => setEmail(e.target.value) }
            required
            />
            <input 
            type='password'
            placeholder='Contraseña'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
        <button type='submit'>Iniciar sesión</button>
        </form>
        {mensaje && <p>{mensaje}</p>}
    </div>
    

);


}

export default IniciarSesion;
import { useState } from 'react';



function Registrarme() {
    console.log("Registrarme renderizado");
    const [ name, setName ] = useState('')
    const [ lastname, setLastname ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ mensaje, setMensaje ] = useState('')
    
    async function handleSubmit(e) {
        e.preventDefault();
        setMensaje('');
    
        try {
        const apiUrl = import.meta.env.VITE_API_URL;
       
 
        const res = await fetch(`${apiUrl}/api/user/registro`, {
           method: 'POST',
           headers: {'Content-Type':'application/json'},
           body: JSON.stringify({name, lastname, email, password})
        });

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
            type='text'
            placeholder='Nombre'
            value={name}
            onChange={(e) => setName(e.target.value) }
            required
            />
            <input 
            type='text'
            placeholder='Apellido'
            value={lastname}
            onChange={(e) => setLastname(e.target.value) }
            required
            />
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
            onChange={(e) => setPassword(e.target.value) }
            required
            />
            <button type='submit'>Registrarme</button>
            
        </form>
        {mensaje && <p>{mensaje}</p>}
    </div>
    )
   
}

export default Registrarme;
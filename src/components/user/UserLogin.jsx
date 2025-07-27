import { useState } from 'react';



function Registrarme() {
    const [ email, setEmail ] = useState('')
    const [ mensaje, setMensaje ] = useState('')
    
    async function handleSubmit(e) {
        e.preventDefault();
        setMensaje('');
    
        try {
        const apiUrl = import.meta.env.VITE_API_URL;
       
 
        const res = await fetch(`${apiUrl}/api/user/login`, {
           method: 'POST',
           headers: {'Content-Type':'application/json'},
           credentials: 'include',
           body: JSON.stringify({email})
        });

        const data = await res.json();
          setMensaje('Enviando...')
        console.log(data);

        if(res.ok){
            setMensaje('Revisá tu correo para acceder al enlace de acceso');
        } else {
            setMensaje('Error al enviar el enlace')
        }

    } catch {
        setMensaje('Error en la conexión')
        
    }
}

return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
            type='email'
            placeholder='Tu email'
            value={email}
            onChange={(e) => setEmail(e.target.value) }
            required
            />
            <button type='submit'>Enviar enlace</button>
            
        </form>
        {mensaje && <p>{mensaje}</p>}
    </div>
    )
}

export default Registrarme;
import { useState } from 'react';



export default function MagicLinkLogin() {
    const [ email, setEmail ] = useState('')
    const [ mensaje, setMensaje ] = useState('')
    
    async function handleSubmit(e) {
        e.preventDefault();
        setMensaje('');
    
        try {
        const URL = import.meta.env.VITE_API_URL; 
        const res = await fetch(`${URL}/api/user/login`, {
           method: 'POST',
           headers: {'Content-Type':'application/json'},
           body: JSON.stringify({email})
        });

        const data = await res.json();
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
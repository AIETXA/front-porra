import { useState } from 'react';

export default function MagicLinkLogin() {
    const [ email, setEmail ] = useState('')
    const [ mensaje, setMensaje ] = useState('')

async function handleSubmit(e) {
    e.preventDefault();
    setMensaje('');
    try {
        const res = await fetch('/api/login', {
           method: 'POST',
           headers: {'Content-Type':'application/json'},
           body: JSON.stringify({email})
        });
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
import { useState } from 'react'
import axios from 'axios'


function FormularioPorra() {
    const [ mensajeError, setMensajeError ] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const datos = new FormData(form)
        const dorsales = []

for(let i = 0; i < 15; i ++) {
    const d = datos.get(`dorsal-${i}`)
    if(d) dorsales.push(d.trim())

}
if(dorsales.length !==15){
    setMensajeError('Debes ingresar 15 dorsales')
    return;
}
const dorsalesSet = new Set()
const repetidos = []

dorsales.forEach(d => {
    if(dorsalesSet.has(d)){
        repetidos.push(d)
    } else {
        dorsalesSet.add(d)
    }
})

if(repetidos.length) {
    setMensajeError(`Hay dorsales repetidos:  ${[...new Set(repetidos)].join(', ')}`)
    return;
}

const payload = {
    nombre: datos.get("nombre"),
    
    dorsales: dorsales.map(d => parseInt(d))
}

const apiUrl = import.meta.env.VITE_API_URL;

axios.post(`${apiUrl}/api/porras`, payload, {
  headers: {
    Authorization: 'Bearer ' + localStorage.getItem('authToken')
  }
})
.then(res => {
 
  setMensajeError(''),
 window.location.href = '/dashboard/user';
})
.catch(err => {
  console.error(err);
});
    }


return (
    <form className="porra" onSubmit={handleSubmit}>
    <div className="nav-inscripcion">
        <input type="text" name="nombre" placeholder="Ingresá el nombre de tu porra" style={{ height:'100%', width:'100%', padding:'8px'}}/>
        <p>Datos de contacto</p>
        <input type="email" name="email" placeholder="Tu correo electrónico"/>
        <input type="tel" name="telefono" placeholder="Tu teléfono"/>
    <h3>Ingresá los dorsales, en orden ascendente, de los 15 corredores que elegiste</h3>
        {[...Array(15)].map((_, i) => (
        <input
            key={i}
            type="number"
            name={`dorsal-${i}`}
            placeholder={`Dorsal #${i + 1}`}
            required
            style={{ marginBottom: '4px' }}
        />
        ))}
    
    <button className="crear-porra" type="submit">Crear</button>  
        {mensajeError && (
          <p style={{ color: 'red', marginTop: '8px' }}>{mensajeError}</p>
        )} 
    </div>
    </form>
)
}

export default FormularioPorra
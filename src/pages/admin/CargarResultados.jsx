
import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'

function FormularioResultados() {
  const { id } = useParams()
  const [primeros, setPrimeros] = useState(['', '', '', '', '', ''])
  const [mensaje, setMensaje] = useState('')
  const navigate = useNavigate()

  const handleChange = (index, value) => {
    const nuevos = [...primeros]
    nuevos[index] = value
    setPrimeros(nuevos)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const token = localStorage.getItem('token')

    try {
      const res = await fetch(`https://back-porra.onrender.com/etapas/${id}/resultados`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ resultados: primeros })
      })

      if (!res.ok) throw new Error('Error al guardar resultados')

      setMensaje('Resultados guardados correctamente')
      setTimeout(() => navigate('/admin/etapas'), 1500)
    } catch (err) {
      setMensaje(err.message)
    }
  }

  return (
    <div>
      <h3>Cargar Resultados - Etapa {id}</h3>
      <form onSubmit={handleSubmit}>
        {[...Array(6)].map((_, i) => (
          <div key={i}>
            <label>Posición {i + 1}:</label>
            <input
              type="text"
              value={primeros[i]}
              onChange={(e) => handleChange(i, e.target.value)}
              placeholder="Dorsal o ID del corredor"
              required
            />
          </div>
        ))}
        <button type="submit">Guardar Resultados</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  )
}

export default FormularioResultados

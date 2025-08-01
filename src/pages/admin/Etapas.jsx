
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function AdminEtapas() {

  const [etapas, setEtapas] = useState([])
  const [error, setError] = useState('')
    
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const token = localStorage.getItem('token')

    fetch(`${apiUrl}/admin/etapas`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((res) => {
        if (!res.ok) throw new Error('Error al obtener etapas')
        return res.json()
      })
      .then((data) => setEtapas(data))
      .catch((err) => setError(err.message))
  }, [])

  if (error) return <p style={{ color: 'red' }}>{error}</p>

  return (
    <div>
      <h3>Listado de Etapas</h3>
      <ul>
        {etapas.map((etapa) => (
          <li key={etapa.id} style={{ marginBottom: '1rem' }}>
            <strong>Etapa {etapa.id}</strong> - {etapa.tipo} - {etapa.fecha}
            <br />
            <Link to={`/admin/etapas/${etapa.id}`}>
              Cargar resultados
            </Link>
            
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AdminEtapas

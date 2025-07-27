import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import EtapasList from '../EtapasList'
import ItemPorra from '../user/MisPorras'



function DashboardUser() { 
    const [porras, setPorras] = useState([])
    const [etapas, setEtapas] = useState([])
    const [ranking, setRanking] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('authToken')
    if (!token) {
      navigate('/registro')
      return
    }

    async function cargarDatos() {
      try {
        const headers = { Authorization: 'Bearer ' + token }

        const res = await fetch('http://localhost:3000/api/user/dashboard', { headers });
        if (!res.ok) throw new Error('Error al obtener datos del dashboard')

        const data = await res.json();
        setPorras(data.misPorras);
        setRanking(data.ranking);
        setEtapas(data.etapas);

      } catch (err) {
        console.error('Error cargando dashboard', err)
      } finally {
        setLoading(false)
      }

      
    }

    cargarDatos()
  }, [navigate])

  if (loading) return <div className="spinner"></div>
    
  
  return (
    <>
    <section className='dash-section'>
         <h2>Tu porra</h2>
        {porras.length === 0 ? (
            <p>No tenés porras creadas.</p>
            ) : (
            porras.map((porra, i) => (
                <ItemPorra key={i} porra={porra} />
            ))
            )}


      <h2>Ranking</h2>
      <ol>
        {ranking.map((user, i) => (
          <li key={i}>{user.nombre} - {user.puntosTotales} puntos</li>
        ))}
      </ol>

      <h2>Etapas</h2>
        <EtapasList etapas={etapas} modo="usuario" className="dash-etapas"/>
    </section>
    </>
    )
}

export default DashboardUser
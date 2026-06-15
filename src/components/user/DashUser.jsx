import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import EtapasList from '../EtapasList'
import ItemPorra from './MisPorras'
import FormularioPorra from './Formulario'



function DashboardUser() { 
    const [porras, setPorras] = useState([])
    const [etapas, setEtapas] = useState([])
    const [ranking, setRanking] = useState([])
    const [loading, setLoading] = useState(true)
    const [mostrarForm, setMostrarForm] = useState(false)
    const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('authToken')
    if (!token) {
      navigate('/registro')
      return
    }

   
    async function cargarDatos() {
      // 🚀 INTERCEPTOR MODO DEMO: Si entran como invitado, inyectamos los datos corregidos aquí
      if (token === 'invitado_demo_porra') {
        console.log('Modo Demo Activo: Cargando datos simulados para el CV.');
        setPorras([
          {
            id: 1,
            nombre: "Mi Porra del Tour 💛",
            corredores: [
              { corredor: { dorsal: 1, nombre: "Tadej", apellido: "Pogačar" } },
              { corredor: { dorsal: 11, nombre: "Jonas", apellido: "Vingegaard" } },
              { corredor: { dorsal: 21, nombre: "Remco", apellido: "Evenepoel" } }
            ]
          }
        ]);
        setRanking([
          { nombre: "Ailén (Tú)", puntosTotales: 150 },
          { nombre: "Reclutador_Demo", puntosTotales: 135 },
          { nombre: "Usuario_Prueba", puntosTotales: 120 }
        ]);
        setEtapas([
          { 
            id: 1, 
            nombre: "Etapa 1: Florencia > Rímini", 
            tipo: "Media Montaña",
            fecha: "2026-07-04T12:00:00.000Z" // ✅ Fecha ISO válida para evitar el Invalid Date
          },
          { 
            id: 2, 
            nombre: "Etapa 2: Cesenatico > Bolonia", 
            tipo: "Media Montaña",
            fecha: "2026-07-05T12:00:00.000Z" // ✅ Fecha ISO válida para evitar el Invalid Date
          }
        ]);
        setLoading(false);
        return; // Frenamos la función aquí para que no intente pegarle al backend real
      }  

      try {
        const headers = { Authorization: 'Bearer ' + token }
        const apiUrl = import.meta.env.VITE_API_URL;
        const res = await fetch(`${apiUrl}/api/user/dashboard`, { headers });
        if (!res.ok) throw new Error('Error al obtener datos del dashboard')

        const data = await res.json();
        setPorras(data.misPorras || []);
        setRanking(data.ranking || []);
        setEtapas(data.etapas || []);

      } catch (err) {
        console.error('Error cargando dashboard', err)

        setPorras([]);
        setRanking([]);
        setEtapas([]);

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
      <button 
        onClick={() => setMostrarForm(!mostrarForm)}
        style={{
            backgroundColor: mostrarForm ? '#e53935' : '#757575',
            color: 'white',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
        {mostrarForm ? '✖️ Cancelar' : '➕ Crear Porra'}
      </button>
      {mostrarForm && (
        <div style={{ margin: '20px 0', padding: '15px', border: '1px solid #ccc', borderRadius: '8px' }}>
          <FormularioPorra />
        </div>
      )}

      <h2>🏆Ranking</h2>
      <ol>
        {ranking.map((user, i) => (
          <li key={i}>{user.nombre} - {user.puntosTotales} puntos</li>
        ))}
      </ol>

      <h2>🚴Etapas</h2>
        <EtapasList etapas={etapas} modo="usuario" className="dash-etapas"/>
    </section>
    </>
    )
}

export default DashboardUser
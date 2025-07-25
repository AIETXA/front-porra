import { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

export default function AdminPanel() {
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      navigate('/admin/login') 
    }
  }, [navigate])

  function logout() {
    localStorage.removeItem('token')
    navigate('/admin/login')
  }

  const styles = {
    body: {
      fontFamily: 'sans-serif',
      backgroundColor: '#f7f7f7',
      padding: '2rem',
      color: '#333',
      minHeight: '100vh',
    },
    h2: {
      color: '#f90b96ff',
    },
    ul: {
      listStyle: 'none',
      padding: 0,
    },
    li: {
      margin: '1rem 0',
    },
    a: {
      textDecoration: 'none',
      backgroundColor: '#00cc36ff',
      color: 'white',
      padding: '0.5rem 1rem',
      borderRadius: '5px',
    },
   
    button: {
      backgroundColor: '#00cc36ff',
      color: 'white',
      padding: '0.5rem 1rem',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
    },
  }

  return (
    <div style={styles.body}>
      <h2 style={styles.h2}>Bienvenido al Panel de Administración</h2>
      <p>Selecciona una opción:</p>
      <ul style={styles.ul}>
        <li style={styles.li}>
          <Link style={styles.a} to="/admin/etapas">Ver etapas</Link>
        </li>
        <li style={styles.li}>
          <Link style={styles.a} to="/admin/corredores">Ver corredores</Link>
        </li>
        <li style={styles.li}>
          <Link style={styles.a} to="/admin/listas">Ver listas</Link>
        </li>
        <li style={styles.li}>
          <button style={styles.button} onClick={logout}>Cerrar sesión</button>
        </li>
      </ul>
      <Outlet/>
    </div>
  )


}

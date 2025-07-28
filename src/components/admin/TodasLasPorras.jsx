import ListaDePorras from "../user/PorrasList";
import { useState, useEffect } from 'react'

function AdminPorras() {
  const token = localStorage.getItem('token');
  const [todasLasPorras, setTodasLasPorras] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL;
  
  useEffect(() => {
    fetch(`${apiUrl}/admin/listas`, {
        headers: {
        'Authorization': `Bearer ${token}` 
      }
    } )
      .then(res => {
       if (!res.ok) throw new Error("Fallo en la respuesta");
       return res.json()
      })
      .then(data => {
       setTodasLasPorras(data)
      })
      .catch(err => console.error('Error al obtener todas las porras', err));
  }, []);

  return (
    <div>
      <h3>Todas las porras</h3>
        <ListaDePorras misPorras={todasLasPorras} />
    </div>
  );
}

export default AdminPorras;
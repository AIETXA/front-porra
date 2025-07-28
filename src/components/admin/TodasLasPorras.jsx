import ListaDePorras from "../user/PorrasList";
import { useState} from 'react'

function AdminPorras() {
  const [todasLasPorras, setTodasLasPorras] = useState([]);
    const apiUrl = import.meta.env.VITE_API_URL;
  useEffect(() => {
    fetch(`${apiUrl}/api/admin/porras`) 
      .then(res => res.json())
      .then(data => setTodasLasPorras(data))
      .catch(err => console.error('Error al obtener todas las porras', err));
  }, []);

  return (
    <div>
      <h1>Todas las porras</h1>
      <ListaDePorras misPorras={todasLasPorras} />
    </div>
  );
}

export default AdminPorras;
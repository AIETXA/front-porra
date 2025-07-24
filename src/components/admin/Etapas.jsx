import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const AdminEtapas = () => {
    const [ etapas, setEtapas ] = useState([]);
    const navigate = useNavigate();
    const apiUrl = import.meta.env.VITE_API_URL;

useEffect(() => {
  fetch(`${apiUrl}/api/etapas`, {
    headers: {
      Authorization: `Bearer ${token}`, 
    },
  })
    .then(res => res.json())
    .then(data => {
       console.log('Etapas cargadas:', data)
      setEtapas(data)
    })

    .catch(err => {
      console.error('Error al cargar la etapa', err)
    });
}, []);



    return (
      <div style={{ padding: '2rem' }}>
        <h2>Etapas del Tour</h2>
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th>Etapa</th>
            <th>Fecha</th>
            <th>Distancia</th>
            <th>Recorrido</th>
            <th>Tipo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          
          {etapas.map(etapa => (
            <tr key={etapa.id}>
              <td>{etapa.numero}</td>
              <td>{new Date(etapa.fecha).toLocaleDateString()}</td>
              <td>{etapa.kilometros ? etapa.kilometros + ' km' : '-'}</td>
              <td>{etapa.recorrido || '-'}</td>
              <td>{etapa.tipo}</td>
              <td>
                <button onClick={() => navigate(`/admin/etapas/${etapa.id}`)}>+</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
     

export default AdminEtapas;
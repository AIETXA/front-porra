import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const EtapasAdminTabla = () => {
  
    const [ etapas, setEtapas ] = useState([]);
    const [ loading, setLoading ] = useState(true)
    const navigate = useNavigate();
    const apiUrl = import.meta.env.VITE_API_URL;

    const tiposOrden = ['EtapasDiarias', 'FinalMontaña', 'FinalGeneral'];

    const etapasAgrupadas = tiposOrden.map(tipo => ({
      tipo,
      etapas: etapas
      .filter(e => e.tipo === tipo)
      .sort((a, b) => parseInt(a.numero) - parseInt(b.numero))
    }));


    useEffect(() => {
      setTimeout(() => {
      
        const token = localStorage.getItem('token');
        fetch(`${apiUrl}/api/etapas`, {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        })
        .then(res => res.json())
        .then(data => {
          setEtapas(data),
          setLoading(false)
        })
        
        .catch(err => {
          console.error('Error al cargar la etapa', err)
        });
      }, 1000)
}, []);

if(loading) {
  return <div className="spinner"></div>
}

    return (
      <>
      {etapasAgrupadas.map(grupo => (
        <div key={grupo.tipo} style={{ margin: '10px', marginBottom: '2rem' }}>
          <h3>{grupo.tipo}</h3>
          <table style={{ borderCollapse: 'collapse', width: '100%' }}>
            <thead>
              <tr className="titulos-tabla">
                <th>Etapa</th>
                <th>Fecha</th>
                <th>Distancia</th>
                <th>Recorrido</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody className="centrado">
              {grupo.etapas.sort((a, b) => parseInt(a.numero) - parseInt(b.numero)).map(etapa => (
                <tr key={etapa.id}>
                  <td>{etapa.numero}</td>
                  <td>{new Date(etapa.fecha).toLocaleDateString()}</td>
                  <td>{etapa.kilometros ? etapa.kilometros + ' km' : '-'}</td>
                  <td>{etapa.recorrido || '-'}</td>
                  <td>
                    {etapa.tipo !== 'Descanso' && (
                      <button onClick={() => navigate(`/admin/etapas/${etapa.id}`)} className="botones">Cargar</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
      </>
    );
  };
     

export default EtapasAdminTabla;
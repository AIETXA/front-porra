import { useEffect, useState } from "react";
import axios from "axios";


const tiposOrden = ['EtapasDiarias', 'FinalMontaña', 'FinalGeneral'];

const EtapasEnDashboard = ({ esVistaUsuario = false }) => {
    const [etapas, setEtapa] = useState([]);
  

  useEffect(() => {
    axios.get('http://localhost:3000/etapas')
    .then(res => 
        setEtapa (res.data))
        
    .catch(err => console.error(err));
  }, []);

  const etapasAgrupadas = tiposOrden.map(tipo => ({
    tipo,
    etapas: etapas
      .filter(e => e.tipo === tipo)
      .sort((a, b) => parseInt(a.numero) - parseInt(b.numero))
  }));
return (
    <div className="tablero-etapas"  style={{ padding: '1rem' }}>
     <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}>Etapas</h3>
      
      {etapasAgrupadas.map((grupo) => (
        <div className="grid-etapas" key={grupo.tipo} style={{ margin: '10px', marginBottom: '2rem' }}>
          <h3>{grupo.tipo}</h3>
          <table style={{ borderCollapse: 'collapse', width: '100%' }}>
            <thead>
              <tr className="titulos-tabla" style={{ backgroundColor: '#f7f7f7', textAlign: 'left' }}>
                <th style={{ padding: '8px' }}>Etapa</th>
                <th style={{ padding: '8px' }}>Fecha</th>
                <th style={{ padding: '8px' }}>Distancia</th>
                <th style={{ padding: '8px' }}>Recorrido</th>
                
              </tr>
            </thead>
            <tbody>
           
              {grupo.etapas.map(etapa => (
                <tr key={etapa.id} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '8px' }}>{etapa.numero}</td>
                  <td style={{ padding: '8px' }}>{new Date(etapa.fecha).toLocaleDateString()}</td>
                  <td style={{ padding: '8px' }}>{etapa.kilometros ? etapa.kilometros + ' km' : '-'}</td>
                  <td style={{ padding: '8px' }}>{etapa.recorrido || '-'}</td>
                  <td style={{ padding: '8px' }}>
                  <a
                    href={`/img/e-${etapa.numero}.jpg`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'rgba(215, 194, 53, 1)' }}
>                   <strong>Detalles</strong></a>

                 </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
   
        </div>
);

};

export default EtapasEnDashboard
import { useEffect, useState } from "react";
import axios from "axios";

const EtapasEnDashboard = () => {
 
  const [etapas, setEtapa] = useState([]);
  

  useEffect(() => {
    axios.get('http://localhost:3000/etapas')
    .then(res => setEtapa (res.data))
    .catch(err => console.error(err));
  }, []);





return (
    <div className="tablero-etapas">
     <h3>Etapas</h3>
      {etapas.map((grupo) => (
        <div className="grid-etapas" key={grupo.tipo} style={{ margin: '10px', marginBottom: '2rem' }}>
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
            <tbody>
           
              {grupo.etapas
              .sort((a, b) => parseInt(a.numero) - parseInt(b.numero))
              .map(etapa => (
                <tr key={etapa.id}>
                  <td>{etapa.numero}</td>
                  <td>{new Date(etapa.fecha).toLocaleDateString()}</td>
                  <td>{etapa.kilometros ? etapa.kilometros + ' km' : '-'}</td>
                  <td>{etapa.recorrido || '-'}</td>
                 </tr>
              ))}
             
            </tbody>
          </table>
        </div>
      ))}
      </div>
    );
}

export default EtapasEnDashboard
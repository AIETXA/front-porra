import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const dorsalesPorTipoEtapa = {
  EtapasDiarias: 6,
  FinalMontaña: 3,
  FinalGeneral: 15
};

const AdminEtapaDetalle = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const apiUrl = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem('token');

  const [etapa, setEtapa] = useState(null);
  const [dorsales, setDorsales] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/api/etapas/${id}`, { 
      headers: { Authorization: `Bearer ${token}` } 
    })
    .then(res => res.json())
    .then(data => {
      setEtapa(data);

    let cantidad = dorsalesPorTipoEtapa[data.tipo] || 6
    setDorsales(Array(cantidad).fill(''));
    })
    .catch(console.error);
  }, [id]);

  const handleChangeDorsal = (index, value) => {
    const dorsalesGanadores = [...dorsales];
    dorsalesGanadores[index] = value;
    setDorsales(dorsalesGanadores);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

  
try {
    const res = await fetch(`${apiUrl}/api/etapas/${id}/procesar`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ 
        numeroEtapa: etapa.numero, 
        dorsales: dorsales.map(d => Number(d))
       
      })
    });
  
      if(!res.ok) throw new Error('Error al guardar resultados');
      alert('Resultados guardados');
      navigate('/admin/ranking'); 

    } catch(err) {
        console.error({message: 'Error de carga'})

    }
   
  };

  if(!etapa) return <p>Cargando etapa...</p>;

  return (
    <form onSubmit={handleSubmit} style={{ padding: '2rem' }}>
      <h3>Cargar Resultados - Etapa {etapa.numero} ({etapa.tipo})</h3>
      {dorsales.map((dorsal, i) => (
        <div key={i} style={{ marginBottom: '0.5rem' }}>
          <label>Posición {i + 1}:</label>
          <input
            type="text"
            value={dorsal}
            onChange={(e) => handleChangeDorsal(i, e.target.value)}
            placeholder="Dorsal del corredor"
            required
            style={{ marginLeft: '0.5rem' }}
          />
        </div>
      ))}
      <button type="submit">Guardar Resultados</button>
    </form>
  );
};

export default AdminEtapaDetalle;

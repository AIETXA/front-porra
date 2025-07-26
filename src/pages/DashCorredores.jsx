import { useEffect, useState } from "react";
import axios from "axios";

const Corredores = () => {
  const [corredores, setCorredores] = useState([]);
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    setTimeout(() => {

      axios.get('http://localhost:3000/corredores/')
      .then(res => 
        setCorredores(res.data),
        setLoading(false))
      .catch(err => console.error(err));
    }, 1000)
  }, []);

  if(loading) {
    return <div className="spinner"></div>
  }
  
  return (
    <div style={{ padding: '1rem' }}>
      <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}>Corredores</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead style={{ backgroundColor: '#f7f7f7', textAlign: 'left' }}>
          <tr>
            <th style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>Dorsal</th>
            <th style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>Nombre</th>
            <th style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>Apellido</th>
            <th style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>Info</th>

          </tr>
        </thead>
        <tbody>
          {corredores.map(c => (
            <tr key={c.id} style={{ padding: '8px', borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '8px' }}>{c.dorsal}</td>
              <td style={{ padding: '8px' }}>{c.nombre}</td>
              <td style={{ padding: '8px' }}>{c.apellido}</td>
              <td><a href={c.url} style={{ padding: '8px' }} target="_blank" rel="noopener noreferrer" >{c.url}</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Corredores;

import { useEffect, useState } from 'react';

function Ranking() {
  const [ranking, setRanking] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetch(`${apiUrl}/api/porras/ranking`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => res.json())
    .then(data => setRanking(data))
    .catch(console.error);
  }, []);

  if (!ranking.length) return <p>No hay datos aún.</p>;

  return (
    <div>
      <h2>Ranking</h2>
      <ul>
        {ranking.map(porra => (
          <li key={porra.id}>
            {porra.nombre} - {porra.puntosTotales} puntos
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Ranking;

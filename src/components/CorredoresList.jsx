const CorredoresList = ({ corredores }) => {
  return (
    <ul>
      {corredores.map((c) => (
        <li key={c.id}>
          #{c.dorsal} - {c.nombre} {c.equipo ? `(${c.equipo})` : ''}
        </li>
      ))}
    </ul>
  );
};

export default CorredoresList;
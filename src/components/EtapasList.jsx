const EtapasList = ({ etapas, modo }) => {
  return (
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th>Etapa</th>
          <th>Fecha</th>
          <th>Tipo</th>
          {modo === "usuario" && <th>Mis puntos</th>}
          {modo === "admin" && <th>Acciones</th>}
        </tr>
      </thead>
      <tbody>
        {etapas.map((etapa) => (
          <tr key={etapa.id}>
            <td>{etapa.numero}</td>
            <td>{new Date(etapa.fecha).toLocaleDateString()}</td>
            <td>{etapa.tipo}</td>
            {modo === "usuario" && <td>{etapa.puntosUsuario || 0}</td>}
            {modo === "admin" && <td><button>Editar</button></td>}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EtapasList;
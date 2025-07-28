import { useState, useEffect } from 'react'

function ItemPorra({porra}) {
    const [abierta, setAbierta ] = useState(false)

  

return (
  <div className='lista-porras'>
     <div className="item">
      <div onClick={() => setAbierta(!abierta)} style={{ cursor: 'pointer', fontWeight: 'bold' }}>
        {porra.nombre}
      </div>

      {abierta && (
        <ul>
          {porra.corredores.map((c, i) => (
            <li key={i}>
              #{c.corredor?.dorsal} - {c.corredor?.nombre} {c.corredor?.apellido}
            </li>
            ))}
        </ul>
      )}
    </div>
  </div>  
  );


}

export default ItemPorra
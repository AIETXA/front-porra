  import ItemPorra from "./MisPorras"
  
  
function ListaDePorras({misPorras = []}) {
    
    return (
        <div>
        {misPorras.length === 0 ? (
        <p>No hay porras para mostrar</p>
      ) : (
        misPorras.map(porra => <ItemPorra key={porra.id} porra={porra} />)
      )}
    </div>
    )
      
    }
    export default ListaDePorras
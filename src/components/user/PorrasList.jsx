  import ItemPorra from "./MisPorras"
  
  
function ListaDePorras({misPorras}) {
    return (
        <div>
        {misPorras.map(porra => (
        <ItemPorra key={porra.id} porra={porra} />
      ))}
    </div>
    )
      
    }
    export default ListaDePorras
import '../styles/Inicio.css'


const BasesyCondiciones = () => {
 
 return (
    <section className="bases">
    <ol>
        <li>Podrá participar todo aficionado que lo desee.	</li>				
		  <li>La aportación será de 30 (TREINTA) Euros.</li>							
		  <li>Cada participante rellenará un impreso, con copia, con los siguientes datos:
          <p>
            a- Nombre del apostante, dirección y teléfono.<br></br>
            b- Una lista de 15 corredores con su número de dorsal en orden correlativo. En todos los casos prevalecerá el número de dorsal sobre el nombre del ciclista.						
		  </p>
          </li> 
          <li>Si a última hora hubiera una baja, prevalecerá el número de dorsal.</li>	
          <li>Si durante el transcurso de la prueba hubiera desclasificaciones, descalificaciones, ..., etc., los puntos de la quiniela se atendrán a las clasificaciones oficiales de dicha prueba, y siempre dentro del periodo del transcurso de la misma.</li>			
          <li>Si la prueba por diversas razones, finalizara antes de su tiempo, la quiniela se atendrá a la clasificación oficial y si en su defecto no se señalara ninguna, la quiniela aplicará la clasificación a ese día.</li>			
		 <li>Las etapas que se corran en la modalidad "por equipos" no puntuará.</li>
         <li>Si hubiese algún día una etapa dIvidida en dos sectores, se considerarán dos etapas.</li>
         <li>Al finalizar el TOUR, si hubiese entre las listas premiadas empate a puntos, ganará el premio el que más etapas haya ganado. Si persistiera el empate, el que más segundos puestos haya obtenido. Si todavía seguieran empatados, el que más terceros. Si después de esto siguieran empatados, el premio obtenido sería repartido en partes iguales.</li>					
        <li>El dinero recaudado será distribuido:
            <p>
                <strong>Para gastos de organización el 5%<br></br></strong>							
	                <strong>1er. premio:</strong>	 40% de lo recaudado.<br></br>					
	                <strong>2º premio:</strong> 25% de lo recaudado.	<br></br>
                    <strong>3er. premio:</strong> 12,5% de lo recaudado.	<br></br>
                   <strong> 4º al 10º:</strong>	 2,5%  de lo recaudado.			   			
            </p>
        </li>
        <li>Las puntuaciones serán las siguientes:</li></ol>
        <table className="t-1">
            <thead>
                <caption><strong>Diarias:</strong></caption>
                <tr>
                    <th colSpan='6'><u>En cada etapa:</u></th>
                </tr>
                <tr>
                    <th>1º puesto</th>
                    <th>2º puesto</th>
                    <th>3º puesto</th>
                    <th>4º puesto</th>
                    <th>5º puesto</th>
                    <th>6º puesto</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>31 puntos</td>
                    <td>23 puntos</td>
                    <td>17 puntos</td>
                    <td>13 puntos</td>
                    <td>9 puntos</td>
                    <td>7 puntos</td>
                </tr>
            </tbody>
        </table>

        <table className="t-2">
            <thead>
                <caption><strong>Final:</strong></caption>
                <tr>
                    <th colSpan='3'><u>Montaña:</u></th>
                </tr>
                <tr>
                    <th>1º puesto</th>
                    <th>2º puesto</th>
                    <th>3º puesto</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>50 puntos</td>
                    <td>30 puntos</td>
                    <td>15 puntos</td>
                   
                </tr>
            </tbody>
       

            <thead>
                <tr>
                    <th colSpan="15"><u>General:</u></th>
                </tr>
                <tr>
                    <th>1º puesto</th>
                    <th>2º puesto</th>
                    <th>3º puesto</th>
                    <th>4º puesto</th>
                    <th>5º puesto</th>
                    <th>6º puesto</th>
                    <th>7º puesto</th>
                    <th>8º puesto</th>
                    <th>9º puesto</th>
                    <th>10º puesto</th>
                    <th>11º puesto</th>
                    <th>12º puesto</th>
                    <th>13º puesto</th>
                    <th>14º puesto</th>
                    <th>15º puesto</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>100 puntos</td>
                    <td>75 puntos</td>
                    <td>65 puntos</td>
                    <td>60 puntos</td>
                    <td>55 puntos</td>
                    <td>50 puntos</td>
                    <td>45 puntos</td>
                    <td>40 puntos</td>
                    <td>35 puntos</td>
                    <td>30 puntos</td>
                    <td>25 puntos</td>
                    <td>20 puntos</td>
                    <td>15 puntos</td>
                    <td>10 puntos</td>
                    <td>5 puntos</td>
                </tr>
            </tbody>
        </table>
        <p style={{textAlign:'center'}}><strong>
            LA INSCRIPCIÓN SE CERRARÁ EL DOMINGO 3 DE JULIO A LAS 14 HORAS. <br></br> 
            LA PRIMERA Y SEGUNDA ETAPA DEL VIERNES 1 Y SÁBADO 2 NO PUNTUAN. <br></br>			
		    HASTA LAS 22 HORAS DEL JUEVES 7 DE JULIO SE PODRÁN RECLAMAR LOS POSIBLES ERRORES EN LAS TRANSCRIPCIONES DE LAS LISTAS.
        </strong></p>
    </section>
    )
}

export default BasesyCondiciones
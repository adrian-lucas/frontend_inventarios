import { useEffect,useState } from "react";

function BarraPagination({infoPagination,pagina,setPagina,actualizarTabla}){
    console.log('informacion paginacion en barraNavegacion', infoPagination);
    const [numeros,setNumeros] = useState([]);

    useEffect(() => {
        calcularPaginas();
        setNumeros([]);
      }, [infoPagination]);
    
    const calcularPaginas=()=>{
        let i=pagina;
        console.log('i inicial:' +i);
        while(i<=(pagina*10) && i<=infoPagination.totalPages){
            numeros.push(i); //no funciona con use state
            i++;
            console.log(numeros);
        }
       
    }
    
    const atras = ()=>{
        setPagina(--pagina);
        actualizarTabla();
    }
    const siguiente = ()=>{
        setPagina(++pagina);
        actualizarTabla();
    }
   
    return(
        <div className="w3-center">
            <div className="w3-bar w3-border">
                <span className="w3-button"  onClick={atras}>«</span>
                {
                numeros.map((numero)=>{
                   return <span className="w3-button" value ={numero}>{numero}</span>  
                })
                }
                <span className="w3-button" onClick={siguiente}>»</span>

            </div>
        </div>
    )
}
export default BarraPagination;
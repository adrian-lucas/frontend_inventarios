import {useState} from "react";

function BarraPagination({infoPagination,setPagina,actualizarTabla}){
    const array = [1,2,3,4,5,6,7,8,9,10];
    const [numeros,setNumeros] = useState(array);  
    const [numerosAnteriores, setNumerosAnteriores] = useState([]);  
    
   const actualizarNumerosSiguiente =()=>{
    let ultimoNumero = numeros[numeros.length-1];
    let i = ultimoNumero+1;
    let arr = [];

    while(i<=ultimoNumero+10 && i<=infoPagination.totalPages){
        arr.push(i++);
    }
    setNumerosAnteriores([...numerosAnteriores,numeros]);
    setNumeros(arr);   
    }
    
    const atras = ()=>{
        setNumeros(numerosAnteriores.pop());
        console.log(numerosAnteriores);
    }
    const siguiente = ()=>{
        actualizarNumerosSiguiente();
    }
    const cambiarPagina=(numPagina)=>{
        setPagina(numPagina);
        actualizarTabla();
    }
   
    return(
        <div>
            <div className="w3-left w3-margin-left">Pagina: {infoPagination.currentPage}</div>
            <div className="w3-center">
                <div className="w3-bar w3-border">
                    <button 
                        className="w3-button"  
                        onClick={atras} 
                        disabled = {numeros[0]===1?true:false} 
                    >«</button>
                    {
                    numeros.map((numero)=>{
                        return <span 
                            className="w3-button" 
                            onClick={()=>cambiarPagina(numero)} 
                            value ={numero} 
                            key={numero}
                            style={numero===infoPagination.currentPage?{backgroundColor:'coral'}:null}
                    >{numero}</span>  
                    })
                    }
                    <button 
                        className="w3-button" 
                        onClick={siguiente}
                        disabled = {numeros[numeros.length-1]===infoPagination.totalPages?true:false}
                    >»</button>
                </div>
            </div>
            
        </div>
    )
}
export default BarraPagination;
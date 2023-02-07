function Pregunta({eliminar,setPreguntar,setItemVisible}){
    return(
        <div className="w3-modal" style={{display:'block'}}>
            <div className="w3-modal-content w3-card w3-animate-zoom w3-padding" style={{width:'500px'}}>
                <h5 className="w3-center">Seguro que deseas eliminar este producto???</h5>
                <div className="w3-center">
                    <button 
                     className="w3-margin w3-green" 
                     onClick={()=> setPreguntar(false)}>
                        Cancelar
                    </button>
                    <button 
                     className="w3-margin w3-red"
                     onClick={()=> {setPreguntar(false);eliminar();setItemVisible()}}>
                        Eliminar
                    </button>
                   
                </div>
            </div>
        </div>
    )
}
export default Pregunta;
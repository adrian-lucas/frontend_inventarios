import { useState,useEffect } from "react";
function Info(){
    const [activo, setActivo] = useState(false);
    const cambiarActivo = ()=>{setActivo(!activo)};
    useEffect(() => {
      console.log('Renderizado'); //se ejecuta automaticamente al renderizar
    }, []);
    useEffect(() => {
      console.log('Estado activo actualizado');
    }, [activo]);//array son estados
    useEffect(() => {
        return () => { // se ejecuta cuando quite el componente
          console.log('Desmontado');
        }
      }, []);

    

    return (
        <div style={{color:'red'}}>
            <p>
            {
                activo?'Esta activo':'No esta activo'
            }
            </p>
            <button onClick = {cambiarActivo}>Cambiar estado</button>
        </div>
    )
}
export default Info;
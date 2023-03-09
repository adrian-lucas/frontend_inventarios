import { useEffect, useState } from "react";
import FormularioProducto from "../components/formularioProducto/FormularioProducto";
import TablaProductos from "../components/tablaProductos/TablaProductos";
import BarraPagination from "../components/barraPaginacion/BarraPaginacion";
import ApiServices from "../services/api.services";
import { useSelector } from "react-redux";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
function PageProductos(){
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    const ESPECTADOR = 'Espectador';
    const userRole = useSelector((state)=>state.loginInfo.userInfo.role);
    console.log(userRole);
    const [listaProductos, setListaProductos] = useState([]);
    const [actualizar, setActualizar] = useState(false);
    const [pagina, setPagina] = useState(1);
    const [infoPagination, setInfoPaginacion] = useState({});

    useEffect(() => {
      obtenerProductos();
    }, [actualizar]);
    
    const actualizarTabla = ()=>{
        setActualizar(!actualizar);
    }
    

    const obtenerProductos = async ()=>{
        const response = await ApiServices.getProductos(pagina);
        if(response.status === 200){
            setListaProductos(response.data.data);
            setInfoPaginacion(response.data.pagination);
        }else{
            console.log('no se obtuvieron los productos')
        }
    }
    const docDefinition = ()=> {
        let content=[];
        for(let producto of listaProductos){
            content.push(
                {
                text:
                `${producto.nombre}\n
                Descripcion: ${producto.descripcion}
                Marca: ${producto.marca}
                Seccion: ${producto.seccion}
                Precio: ${producto.precio}
                Stock: ${producto.stock}\n\n`
                }
            );
        }
        return {
        content: [
          `Lista de productos Pagina: ${pagina}`,
          {
            // to treat a paragraph as a bulleted list, set an array of items under the ul key
           ol:content
          },
      
        ]
       }
    };
      
    const abrirArchivo = (e)=>{
        console.log(pdfMake.createPdf(docDefinition()).open());
       // pdfMake.createPdf(e.target.files[0]).open();
    }
    
    return (
        localStorage.length?
        <div className="w3-row">
            {
            userRole===ESPECTADOR?
            null:
            <div className="w3-third">
                <h4 className="w3-center">Registrar Nuevo Producto</h4>
                <FormularioProducto 
                    productoAModificar = {null}
                    actualizarTabla = {actualizarTabla}
                />
            </div>
            }
            
            <div className={userRole===ESPECTADOR?"":"w3-twothird"}>
                <h4 className="w3-center">Productos</h4>
                <TablaProductos 
                    listaProductos = {listaProductos} 
                    actualizarTabla = {actualizarTabla}
                />
                <div className="w3-row">     
                    <span className="w3-col m10">
                        <BarraPagination
                            infoPagination = {infoPagination} 
                            setPagina = {setPagina} 
                            actualizarTabla = {actualizarTabla}
                        />
                    </span>
                    <span className="w3-col m2"> 
                        <button
                        onClick={(e)=>{abrirArchivo(e)}}
                        >Generar Lista
                        </button>
                    </span>
                </div> 
            </div>
      </div>
        : <div>Primero debe iniciar sesion</div>
    )
}
export default PageProductos;
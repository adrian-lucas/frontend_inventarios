import FormularioProducto from "../components/formularioProducto/FormularioProducto";
import TablaProductos from "../components/tablaProductos/TablaProductos";
function PageProductos(){
    return (
        <div>
            <FormularioProducto/>
            <TablaProductos/>
        </div>
    )
}
export default PageProductos;
function FormularioProducto(){
    
    return (
        <div className="w3-container w3-border w3-margin" style={{width:'500px'}}>
            <form className="w3-container">
                <label className="w3-container">
                    Nombre:
                    <textarea className="w3-right" name="" id="" cols="20" rows="2"></textarea>
                </label>
                <label className="w3-container">
                    Descripcion:
                    <textarea className="w3-right" name="" id="" cols="20" rows="2"></textarea>
                </label>
                <label className="w3-container">
                    Precio:
                    <input className="w3-right" type="number" />
                </label>
                
                <label className="w3-container">
                    Stock: 
                    <input className="w3-right" type="number" />
                </label>
                <label className="w3-container">
                    Marca:
                    <select className="w3-right" name="Marcas" id=""></select>
                </label>
                <label className="w3-container">
                    Seccion:
                    <select className="w3-right" name="Secciones" id=""></select>
                </label>
                <div className="w3-container w3-margin w3-center">
                   <input className="" type="button" value="Registrar"/> 
                </div>
                


               
            </form>
        </div>
    );
}
export default FormularioProducto;
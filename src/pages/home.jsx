import ApiServices from "../services/api.services";

function Home(){

    const getProductos = async()=>{
        const response = await ApiServices.getProductos();
        if(response.status === 200){
            console.log(response.data.data);
        }
    }
    getProductos();
    return 'Home';
}
export default Home;
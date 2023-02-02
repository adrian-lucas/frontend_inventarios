import '../../styles/w3.css'
function NavBar(){
    return(
        <div className='w3-bar' style={{backgroundColor:'coral'}}>
            <div className='w3-bar-item w3-hover-blue-grey'>Home</div>
            <div className='w3-bar-item w3-hover-blue-grey'>Usuarios</div>
            <div className='w3-bar-item w3-hover-blue-grey'>Productos</div>
        </div>
    )
}
export default NavBar;
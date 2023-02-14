function Header({userInfo}){
    console.log(userInfo.nombres);
    return (
        <div>
            <header className="w3-blue-gray" style={{height:'50px'}}>
                <span className="w3-left">Sistema de Inventarios</span>
                <span className="w3-right">{userInfo.nombres}</span>
            </header>
        </div>
    );
} 
export default Header;
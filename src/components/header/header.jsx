function Header({sessionInfo}){
    const userName = sessionInfo.userInfo.nombres;
    const userRole = sessionInfo.userInfo.role;
    const activeSession = sessionInfo.session;
    console.log(userName);
    return (
        <div>
            <header className="w3-blue-gray " style={{height:'50px'}}>
                <div className="">
                    <span className="w3-left w3-padding">Sistema de Inventarios</span>
                    <span className="w3-right w3-padding">{activeSession?`${userRole} : ${userName}`:null}</span>
                </div>
            </header>
        </div>
    );
} 
export default Header;
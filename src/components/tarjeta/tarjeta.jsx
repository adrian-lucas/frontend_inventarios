import { useState,useEffect } from "react";
function Tarjeta({user,setTarjetaVisible}){
    console.log(user);
    console.log("se esta renderizando tarjeta");

    const [estilo, setEstilo] = useState('gray');
    
    

    useEffect(() => {
      verGender(user.gender);
    }, [])
    
    const verGender = (gender)=>{
        let color = '';
        if(gender=='Female'){
            color ='green';
        }else if(gender == 'Male'){
            color = 'blue'
        }else{
            color = 'gray';
        }
        return {color:color}
       
    }


    return (
            <div id="id01" className="w3-modal" style={{display:'block'}}>
                <div className="w3-modal-content w3-card-4 w3-animate-zoom w3-display-container" style={{maxWidth:'600px'}}>
            
                    <div className="w3-center"><br/>
                        <span onClick={()=>setTarjetaVisible(false)} className="w3-button w3-xlarge w3-transparent w3-display-topright" title="Close Modal">×</span>
                    </div>

                        <div className="w3-section w3-margin" style={verGender(user.gender)}>
                            <label><b>Name: </b>{`${user.first_name} ${user.last_name}`}</label>
                            <br/>
                            <label><b>Email: </b>{user.email}</label>
                            <br/>
                            <label><b>Gender: </b>{user.gender}</label>
                            <br/>
                            <label><b>Username: </b>{user.username}</label>
                        </div>
                </div>
         </div> 
    
    );
    
}
export default Tarjeta;
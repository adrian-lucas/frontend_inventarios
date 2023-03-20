import '../../src/styles/SalaChat.css'
function SalaChat(){
    let socket;
    const init = ()=>{
        var host = "ws://localhost:9000"; 
        try {
            socket = new WebSocket(host);
            console.log('se instancio el socket')
            log('WebSocket - status '+socket.readyState);
            socket.onopen    = (msg)=> { 
            log("Welcome - status "+this.readyState); 
            };
            socket.onmessage = (msg)=> { 
            log("Received: "+msg.data); 
            };
            socket.onclose   = (msg)=> { 
            log("Disconnected - status "+this.readyState); 
            };
        }
        catch(ex){ 
            log(ex); 
        }
        $("msg").focus();
    }

    const send = ()=>{
        var txt,msg;
        txt = $("msg");
        msg = txt.value;
        if(!msg) { 
            alert("Message can not be empty"); 
            return; 
        }
        txt.value="";
        txt.focus();
        try { 
            socket.send(msg); 
            log('Sent: '+msg); 
        } catch(ex) { 
            log(ex); 
        }
    }

    const quit =()=>{
        if (socket != null) {
            log("Goodbye!");
            socket.close();
            socket=null;
        }
    }
    const reconnect=()=>{
        quit();
	    init();
    }

   
    const $ = (id)=>{return document.getElementById(id);}
    const log=(msg)=>{ $("log").innerHTML+="<br>"+msg; }
    const onkey=(event)=>{ if(event.keyCode===13){ send(); } }
    return(
        <div onLoad={init}>
            <h3>Sala de Chat</h3>
            <div id="log"></div>
            <input id="msg" type="textbox" onKeyDown={(e)=>onkey(e)}/>
            <button onClick={send}>Send</button>
            <button onClick={quit}>Quit</button>
            <button onClick={reconnect}>Reconnect</button>
        </div>
    )
}
export default SalaChat;
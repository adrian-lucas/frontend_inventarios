import { useRef } from "react";

function BarraPagination({infoPagination}){
    const arr = [1,2,3,4,5,6,7,8,9,10];
    const volver = useRef(null);
    const siguiente = useRef(null);

    return(
        <div className="w3-center">
            <div className="w3-bar w3-border">
                <span className="w3-button" useRef = {volver} >«</span>
                {
                arr.map((n)=>{
                    return(
                        <span className="w3-button ">{n}</span>
                    );
                })
                }
                <span className="w3-button" userRef = {siguiente}>»</span>

            </div>
        </div>
    )
}
export default BarraPagination;
import { useState } from "react";

export const TrafficLight = () => {

    const [color, setColor] = useState("red");
    
    return (
        <div className="bg-dark d-flex flex-column gap-2 align-items-center container-traffic mx-auto p-4 mt-5 rounded">
            <div className= {`redOff ${color==="redOn" ? "redOn" : ""}`} onClick={()=>setColor("redOn")}></div>
            <div className= {`yellowOff ${color==="yellowOn" ? "yellowOn" : ""}`} onClick={()=>setColor("yellowOn")}></div>
            <div className= {`greenOff ${color==="greenOn" ? "greenOn" : ""}`} onClick={()=>setColor("greenOn")}></div>
        </div>
    )
}

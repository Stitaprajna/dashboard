import React from "react";
import { useState } from "react";
export default function ProgressBar({id,state,setState,value}){
    
    // const [progressvalues,setProgressValue] = useState(50);

    return(
        <div>
            <input onChange={(event)=>{setState([...state.slice(0,id),{...state[id],proficiency:event.target.value},...state.slice(id+1,value.length)])}} className="tracker" type="range"></input>
            <div className="tracker-data">
                <p>0%</p>
                <p   
                style={{position:"absolute",left:`${2.48*Number(state[id].proficiency)}px`}}
                >{state[id].proficiency}%</p>
                <p>100%</p>
            </div>
        </div>
    )
}
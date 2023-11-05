import React from "react";
export default function YearsOfExperience({id,state,setState,value}){

    //Years of Experience
    function PlusHandler(){
        setState([...state.slice(0,id),{...state[id],yrsofexp:state[id].yrsofexp+1},...state.slice(id+1,value.length)])
      };
  
      function MinusHandler(){
          if(state["yrsofexp"]===0){
            setState([...state.slice(0,id),{...state[id],yrsofexp:0},...state.slice(id+1,value.length)])
          }
          else{
            setState([...state.slice(0,id),{...state[id],yrsofexp:state[id].yrsofexp-1},...state.slice(id+1,value.length)])
          }
      };
    
    
    return(
         
        <div>
            <p>Years of experience</p>
            <div className="rectangle">
                <buttom onClick={MinusHandler} className="yrs-exp">-</buttom>
                <p><b>{state[id].yrsofexp}</b> Years</p>
                <buttom onClick={PlusHandler} className="yrs-exp">+</buttom>
            </div>
        </div>
        
    );
}
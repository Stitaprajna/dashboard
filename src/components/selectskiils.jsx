import React from "react";
import "../pages/Page2.css"
import Beginnerg from "../icons/begineer_gray";
import Beginner from "../icons/begineer";
import Advancedg from "../icons/advanved_gray";
import Advanced from "../icons/advanced";
import Expertg from "../icons/expert_gray";
import Masterg from "../icons/master_gray";
import Master from "../icons/master"
import Star from "../icons/star"
import Expert from "../icons/expert";
import Starg from "../icons/star_gray";


export default function SelectSkills({id,state,setState,value}){
    
    function handleClick(){
        setState([...state.slice(0,id),{...state[id],level:{isBegineer:!state[id].level.isBegineer,isAdvanced:false,isExpert:false,isMaster:false,isStar:false}},...state.slice(id+1,value.length)]);
    }

    function handleClick1(){
        setState([...state.slice(0,id),{...state[id],level:{isBegineer:false,isAdvanced:!state[id].level.isAdvanced,isExpert:false,isMaster:false,isStar:false}},...state.slice(id+1,value.length)]);
    }

    function handleClick2(){
        setState([...state.slice(0,id),{...state[id],level:{isBegineer:false,isAdvanced:false,isExpert:!state[id].level.isExpert,isMaster:false,isStar:false}},...state.slice(id+1,value.length)]);
    }

    function handleClick3(){
        setState([...state.slice(0,id),{...state[id],level:{isBegineer:false,isAdvanced:false,isExpert:false,isMaster:!state[id].level.isMaster,isStar:false}},...state.slice(id+1,value.length)]);
    }
    
    function handleClick4(){
        setState([...state.slice(0,id),{...state[id],level:{isBegineer:false,isAdvanced:false,isExpert:false,isMaster:false,isStar:!state[id].level.isStar}},...state.slice(id+1,value.length)]);
    }

    return(
        <div>
            <div className="logo">
                <div> <div onClick={handleClick}>
                        {state[id].level.isBegineer? <Beginner/>:<Beginnerg/>}
                    </div>
                    <p className="expertise-text">Beginner</p>
                </div>

                <div>
                    <div onClick={handleClick1}>
                        {state[id].level.isAdvanced? <Advanced/>:<Advancedg/>}
                    </div>
                    <p className="expertise-text">Advanced</p>
                </div>
                
                <div>
                    <div onClick={handleClick2}>
                        {state[id].level.isExpert? <Expert/>:<Expertg/>}
                    </div>
                    <p className="expertise-text">Expert</p>
                </div>
                <div>
                    <div onClick={handleClick3}> 
                        {state[id].level.isMaster? <Master/>:<Masterg/>}
                    </div>
                    <p className="expertise-text">Master</p>
                </div>
                <div>
                    <div onClick={handleClick4}>
                        {state[id].level.isStar? <Star/>:<Starg/>}
                    </div>
                    <p className="expertise-text">Star</p>
                </div>
            </div> 
        </div>
    )
}


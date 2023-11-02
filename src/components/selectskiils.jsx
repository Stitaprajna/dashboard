import React from "react";
import { useState } from "react";
import "../pages/page2.css"
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
    //  //Skill Selection
    //  const props = {
    //     isbe,...state.slice(id+1,value.length)]gineer:false,
    //     isadvanced:false,
    //     isexpert:false,
    //     ismaster:false,
    //     isstar:false
    // }

    
    // const [state[id],level.setState] = useState(props);
    
    function handleClick(){
        setState([...state.slice(0,id),{...state[id],level:{isbegineer:!state[id].level.isbegineer,isadvanced:false,isexpert:false,ismaster:false,isstar:false}},...state.slice(id+1,value.length)]);
    }

    function handleClick1(){
        setState([...state.slice(0,id),{...state[id],level:{isbegineer:false,isadvanced:!state[id].level.isadvanced,isexpert:false,ismaster:false,isstar:false}},...state.slice(id+1,value.length)]);
    }

    function handleClick2(){
        setState([...state.slice(0,id),{...state[id],level:{isbegineer:false,isadvanced:false,isexpert:!state[id].level.isexpert,ismaster:false,isstar:false}},...state.slice(id+1,value.length)]);
    }

    function handleClick3(){
        setState([...state.slice(0,id),{...state[id],level:{isbegineer:false,isadvanced:false,isexpert:false,ismaster:!state[id].level.ismaster,isstar:false}},...state.slice(id+1,value.length)]);
    }
    
    function handleClick4(){
        setState([...state.slice(0,id),{...state[id],level:{isbegineer:false,isadvanced:false,isexpert:false,ismaster:false,isstar:!state[id].level.isstar}},...state.slice(id+1,value.length)]);
    }

    return(
        <div>
            <div className="logo">
                <div> <div onClick={handleClick}>
                        {state[id].level.isbegineer? <Beginner/>:<Beginnerg/>}
                    </div>
                    <p className="expertise-text">Beginner</p>
                </div>

                <div>
                    <div onClick={handleClick1}>
                        {state[id].level.isadvanced? <Advanced/>:<Advancedg/>}
                    </div>
                    <p className="expertise-text">Advanced</p>
                </div>
                
                <div>
                    <div onClick={handleClick2}>
                        {state[id].level.isexpert? <Expert/>:<Expertg/>}
                    </div>
                    <p className="expertise-text">Expert</p>
                </div>
                <div>
                    <div onClick={handleClick3}> 
                        {state[id].level.ismaster? <Master/>:<Masterg/>}
                    </div>
                    <p className="expertise-text">Master</p>
                </div>
                <div>
                    <div onClick={handleClick4}>
                        {state[id].level.isstar? <Star/>:<Starg/>}
                    </div>
                    <p className="expertise-text">Star</p>
                </div>
            </div> 
        </div>
    )
}


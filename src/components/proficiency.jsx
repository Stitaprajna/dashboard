import React from "react";
import Question from "../icons/question";
import ProgressBar from "./ProgressBar";

export default function Proficiency({id,state,setState,value}){
    return(
        <div>
            <p>Proficiency
                <span className="svg1 svg2 svg3">
                    <Question/>
                </span>
            </p>
            <div>
                <ProgressBar
                id={id}
                state={state}
                setState={setState}
                value={value}/>
            </div>
        </div>
    )
}


import React, { useState } from "react"
import Pen from "../icons/pen"

export default function SkillTextSection({status,style,iconstyle,skillname,assesment,assessmentStyle,selfassesmentlevel,assesmentcomponent,selfassesmentpercent,yrsofexp}){

    return(
        <div className='flex-row'>
            <div style={style}>
                <div>
                    <h2>{skillname}</h2>
                </div>
                <div style={iconstyle}>
                    {status}
                </div>                            
            </div>    

            <div style={assessmentStyle}>
                <div className='icon-skills'>
                    {assesmentcomponent}
                </div>

                <div>
                    {assesment}
                </div>
            </div>

            <div className="self-assessment-portion">
                <p><span className="self-assessment">Self Assessment</span>
                    <span className="Svg">
                        <Pen/>
                    </span>
                    
                    
                    <br/>
                    <label className="label"><span className="bold">{yrsofexp}</span> years, <span className="bold">{selfassesmentlevel}</span> Level with <span className="bold">{selfassesmentpercent}%</span> proficiency</label>
                </p>
            </div>
                        
        </div>
    )
}


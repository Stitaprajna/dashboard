import React, { useState } from "react";
import Checkbox from "./CheckBox";
import Delete from "../icons/delete";
import Question from "../icons/question";
import Proficiency from "./Proficiency";
import YearsOfExperience from "./YearsOfExperience";
import SelectSkills from "./SelectSkiils";
import HorizontalLine from "./HorizonatlLine";


export default function SkillSection({id,value,SkillName,state,setState,handleDeleteSkill}){
    
       
    return(
        <div className="basic add-skills">
                    <div>
                        <div class="skill">
                            <div className="flex-box-row1">
                                <div className="svg1" onClick={()=>handleDeleteSkill(SkillName)}>
                                    <Delete/>
                                </div>
                                <div className="header-box-1">
                                    <h1>{SkillName}</h1>
                                </div>
                            </div>
                            <div className="header-box-1">
                                <Checkbox 
                                props={'Mark this as Expert Skill'}/>
                            </div>
                            
                        </div>

                        <div className="level level1">
                            
                            <p>Select your Level 
                                <span className="svg1 svg2 svg3">
                                    <Question/>
                                </span>
                            </p>
                            <div>
                                <Proficiency
                                id={id}
                                state={state}
                                setState={setState}
                                value={value}/>
                            </div>
                            
                            <div>
                                <YearsOfExperience
                                id={id}
                                state={state}
                                setState={setState}
                                value={value}
                                />
                            </div>
                        </div>

                        <div>
                            <SelectSkills
                            id={id}
                            state={state}
                            setState={setState}
                            value={value}
                            />
                        </div>

                        <div>
                            <HorizontalLine/>
                        </div>
                    </div>
            
            
        </div>
)}
import React, { useState } from "react";
import EmptyComponent from "./emptycomponent";
import Checkbox from "./checkbox";
import Delete from "../icons/delete";
import Question from "../icons/question";
import Proficiency from "./proficiency";
import YearsOfExperience from "./yearsofexperience";
import SelectSkills from "./selectskiils";
import HorizontalLine from "./horizonatlline";


export default function SkillSection({id,value,SkillName,state,setState,handleDeleteSkill}){

    // const [isDelete,setIsDelete]= useState(true);
    
       
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

import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import "./Page1.css"
import Pending from '../icons/pending';
import PenButton from '../icons/penbutton';
import Plus from '../icons/plus';
import SkillTextSection from '../components/SkillTextSection';
import userdata from "./data.json";



export default function Page1(){

    const navigate = useNavigate({});
    // Change skill names
    const mapUserproficiefy={
        "isMaster": "Master",
        "isBegineer": "Beginner",
        "isStar": "Star",
        "isExpert": "Expert",
        "isAdvanced": "Advanced",
    }
    


    
    //Check whether Page loaded
    const [isLoaded,setIsLoaded] = useState(false)
    const [data,setData] = useState([])


    // load data function
    function loadSkillsData(){
        try{
            let data = JSON.parse(localStorage.getItem("userData"))
            data.forEach(item => {
            const trueLevel = Object.keys(item.level).find(key => item.level[key] === true);
            item.level = trueLevel || "Nolevel";
            });
            setData(data);
                }catch(error){
            console.log("No new skills yet ");
        }
    }


    // Actual Loading data 
    useEffect(()=>{

        if(!isLoaded){
            loadSkillsData();
            setIsLoaded(true);
        }

    },[isLoaded])

    


    return(
        
        <div className="app">

            <div>
                <h1 className="beginHeader">My Skills</h1>
            </div>
            
            <div className="box">
                <p><span className="cap">S</span>KILLS</p>
                <p><span className="cap">A</span>SSESSMENTS</p>
            </div>


            <div className='flex-row-0'>

                
                <div>
                    {userdata.map((item,index)=>{
                        return <div key={index}>
                        <SkillTextSection 
                            status={"Done"}
                            skillname={userdata[index].skillname}
                            level={userdata[index].assesmentlevel}
                            assesment={<p className="label"><span className="bold">{userdata[index].assesmentlevel}</span> Level  with <span className="bold">{userdata[index].assesmentpercent}%</span> Proficiency,<br/>{userdata[index].no_of_selfassesment} Assessments</p>}
                            selfassesmentlevel={userdata[index].selfassesmentlevel}
                            selfassesmentpercent={userdata[index].selfassesmentpercent}
                            yrsofexp={userdata[index].yrsofexp}
                            />
                            </div>
                    })}

                </div>


                <div>
                {data.map((item,index)=>{
                    if(item.level !=="Nolevel"){
                        return <div key={index}>
                        <SkillTextSection
                            status={"Done"}
                            skillname={data[index].skillname}
                            level={mapUserproficiefy[data[index].level]}
                            assesment={<p className="label"><span className="bold">{mapUserproficiefy[data[index].level]}</span> Level  with <span className="bold">{data[index].proficiency}%</span> Proficiency,<br/>{5} Assessments</p>}
                            selfassesmentpercent={data[index].proficiency}
                            yrsofexp={data[index].yrsofexp}
                            no_of_selfassesment={5}
                            />
                        </div>}
                    else{
                        return <div key={index}>
                        <SkillTextSection
                            status={"Done"}
                            skillname={data[index].skillname}
                            level={"Nolevel"}
                            assesment={<p className="label"><span className="bold">No expert Assessment taken!</span> <br/><span className='request-assessment'>Request an Assessment</span></p>}
                            selfassesmentlevel={mapUserproficiefy[data[index].level]}
                            selfassesmentpercent={data[index].proficiency}
                            yrsofexp={data[index].yrsofexp}
                            no_of_selfassesment={5}
                            />
                        </div>
                    }
                    })}
                </div>
                
            
            </div>
        
        <div className="box-buttom">
            <button className="button" onClick={()=>{navigate('/manage-skills')}}>
                <span className="svg-button">
                    <PenButton/>
                </span>
                <span className="botton-text">Manage Skills</span></button>

            
            <button className="button" onClick={()=>{navigate('/manage-skills')}}>
                <span className="svg-button">
                    <Plus/>
                </span>
                
                <span className="botton-text">Add Skills</span></button>
            
            
            </div>
        </div>
    
    );
}




                
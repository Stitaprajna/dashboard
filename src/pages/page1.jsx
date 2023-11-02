
import { useNavigate } from 'react-router-dom';
import Done from '../icons/done'
import "./page1.css"
import Pending from '../icons/pending';
import Master from '../icons/master';
import Beginner from '../icons/begineer';
import Star from '../icons/star'
import NoLevel from '../icons/nolevel';
import PenButton from '../icons/penbutton';
import Plus from '../icons/plus';
import SkillTextSection from '../components/skilltextsection';
import Checkbox from '../components/checkbox';
import userdata from "./data.json";
import Expert from '../icons/expert';
import Advanced from '../icons/advanced';


export default function Page1(){
    const navigate = useNavigate({});
    const mapUserproficiefy={
        "ismaster": "Master",
        "isbegineer": "Begineer",
        "isstar": "Star",
        "isexpert": "Expert",
        "isadvanced": "Advanced",
        "No level": "Nolevel",
    }
    const iconMap = {
        "Master": <Master/>,
        "Begineer": <Beginner/>,
        "Star": <Star/>,
        "Expert":<Expert/>,
        "Advanced":<Advanced/>,
        "Nolevel":<NoLevel/>
    };


    // Uploading and Loading the initial data
    // useEffect(()=>{localStorage.setItem("userdata",data)},[data]);

    
    const data = JSON.parse(localStorage.getItem("userData"));
    data.forEach(item => {
    const trueLevel = Object.keys(item.level).find(key => item.level[key] === true);
    item.level = trueLevel || 'No level';
    });
      

    console.log(data);

    const stausMap = {
        "Done": [<Done/>,
                {   
                    position:"relative", 
                    top:"25px",
                    left:"10px"
                },
                {   
                    display:"flex",
                    flexDirection:"row",
                    justifyContent:"flex-start",
                    flexBasis: "0",
                    flexGrow: "1",
                    flexWrap:"wrap"
                },
                {  
                    display: "flex",
                    direction: "row",
                    justifyContent: "flex-start",
                    position: "relative",
                    flexBasis: 0,
                    flexGrow: 1,
                    flexWrap:"wrap"
                  }
            ],

        "Checkbox": [<Checkbox props={'Mark this as Expert Skill'}/>,
                    {   
                        position:"relative", 
                        bottom:"20px",
                        
                    },

                    {   
                        flexBasis: "0",
                        flexGrow: "1",
                        flexWrap:"wrap"
                    },
                    {
                        display: "flex",
                        direction: "row",
                        justifyContent: "flex-start",
                        position: "relative",
                        gap:"2px",
                        flexBasis: "0",
                        flexGrow: "1",
                        flexWrap:"wrap"
                      }
                ]

    }

    
    

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
                            status={stausMap["Done"][0]}
                            iconstyle={stausMap["Done"][1]}
                            style={stausMap["Done"][2]}
                            assessmentStyle={stausMap["Done"][3]}
                            skillname={userdata[index].skillname}
                            assesment={<p className="label"><span className="bold">{userdata[index].assesmentlevel}</span> Level  with <span className="bold">{userdata[index].assesmentpercent}%</span> Proficiency,<br/>{userdata[index].no_of_selfassesment} Assessments</p>}
                            assesmentcomponent={iconMap[userdata[index].assesmentlevel]}
                            selfassesmentlevel={userdata[index].selfassesmentlevel}
                            selfassesmentpercent={userdata[index].selfassesmentpercent}
                            yrsofexp={userdata[index].yrsofexp}
                            />
                            </div>
                    })}

                </div>


                <div>
                {data.map((item,index)=>{
                    if(item.level !=="No level"){
                        return <div key={index}>
                        <SkillTextSection
                            status={stausMap["Done"][0]}
                            iconstyle={stausMap["Done"][1]}
                            style={stausMap["Done"][2]}
                            assessmentStyle={stausMap["Done"][3]}
                            skillname={data[index].skillname}
                            assesment={<p className="label"><span className="bold">{mapUserproficiefy[data[index].level]}</span> Level  with <span className="bold">{data[index].proficiency}%</span> Proficiency,<br/>{5} Assessments</p>}
                            assesmentcomponent={iconMap[mapUserproficiefy[data[index].level]]}
                            selfassesmentlevel={mapUserproficiefy[data[index].level]}
                            selfassesmentpercent={data[index].proficiency}
                            yrsofexp={data[index].yrsofexp}
                            no_of_selfassesment={5}
                            />
                        </div>}
                    else{
                        return <div key={index}>
                        <SkillTextSection
                            status={stausMap["Done"][0]}
                            iconstyle={stausMap["Done"][1]}
                            style={stausMap["Done"][2]}
                            assessmentStyle={stausMap["Done"][3]}
                            skillname={data[index].skillname}
                            assesment={<p className="label"><span className="bold">No expert Assessment taken!</span> <br/><span className='request-assessment'>Request an Assessment</span></p>}
                            assesmentcomponent={iconMap[mapUserproficiefy[data[index].level]]}
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




                
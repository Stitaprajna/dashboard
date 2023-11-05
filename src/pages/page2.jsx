import "./Page2.css"
import { useNavigate } from 'react-router-dom';
import BackArrow from "../icons/backarrow";
import AddSkills from "../components/Addskills";

export default function Page2(){

    const navigate = useNavigate({});
    return(
        <div className="app">
            <div style={{display:"flex",gap:"10px"}}>
                
                    <span onClick={()=>{navigate("/")}} className="Svgg">
                        <BackArrow/>
                    </span>
                    <h1>Manage Skills</h1>
            </div>

            <div className="add-skills">
                <p><span className="basic">Add new skills you possess or update existing skills.<br/></span><span className="basic basic-header">Assess yourself in the skills you have selected.</span>
                </p>

                <div>
                    <AddSkills/>
                </div>
                
            </div>
        </div>
        
    );
    
}

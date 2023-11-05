import React, { useState } from "react";
import SpecialPlus from "../icons/plusspecial";
import { TextField, Autocomplete, MenuItem } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import SkillSection from "./SkillSection";
import Search from "../icons/search";
import { useNavigate } from "react-router-dom";


//Avaliable skills to choose
const names = [
    "UX Design",
    "Graphic Design",
    "Frontend Develoment",
    "Backend Developer",
    "Machine Learning Engineer"
  ];


export default function AddSkills(){
    const navigate = useNavigate({});
    const [state,setState] = useState([]);
    const [value,setValue] = useState([]);
    // const [isCached,setIscached] = useState(false);
    const newskills = [];
    
    function handleStateChange(newValue){
        // if delete 
        if(state.length>newValue.length){
        const newState = state.filter(item => newValue.includes(item.skillname));
        //state 
        setState(newState);
      }
        // adding element before any deletion
        else{
        setState([...state,{
                            id:newValue.length-1,
                            skillname:newValue[newValue.length-1],
                            yrsofexp:0,
                            level:{
                                    isBegineer:false,
                                    isAdvanced:false,
                                    isExpert:false,
                                    isMaster:false,
                                    isStar:false
                                  },
                            proficiency:'50',
                            }]);
                          }
                        }
    
    function handleDeleteSkill(skillname){
        const moifiedState = state.filter(item => item.skillname !=skillname);
        const moifiedValue1 = value.filter(item => item !=skillname);
        setState(moifiedState);
        setValue(moifiedValue1);
    }
    
    //saving data to local storage
    const saveCacheMemory = () => {
      //finding the previously stored data
      try{
        console.log('found previously added data');
        const exsistingData = JSON.parse(localStorage.getItem("userData"));
        const updatedData = exsistingData.concat(state);
        localStorage.setItem("userData", JSON.stringify(updatedData));
      }catch(error){
        //adding the first set of new skills
        console.log('No Old data found');
        localStorage.setItem("userData", JSON.stringify(state));
      };
    };

    
    function handleCancel(){
      setState([]);
      navigate('/');
    }

    console.log(state);


    return(
<div>
    <div className="box1">
        <div>
    <Autocomplete className="select"
      sx={{ 
        m: 1, 
        width: 800,
        background:'#F2F2F2',
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "#F2F2F2",
                },
      }}

      multiple
      freeSolo
      options={names}
      value={value}
      getOptionLabel={(option) => option}
      onChange={(event,newValue)=>{
        console.log('testing',newValue);
        setValue(newValue);handleStateChange(newValue)}}
        disableCloseOnSelect
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          InputProps={{
            ...params.InputProps,
             endAdornment: (
               <Search/>
             )
          }}
        />
      )}

      renderOption={(props, option, { selected }) => (
        <MenuItem
          {...props}
          key={option}
          value={option}
          sx={{ justifyContent: "space-between" }}
        >
          {option}
          {selected ? <CheckIcon color="info" /> : null}
        </MenuItem>
      )}
    />
  </div>
        <buttom onClick={()=>{navigate('/')}} className="add-skills-button">
        <span className="svg5">
            <SpecialPlus/>
        </span>
        
        Add New Skills</buttom>
    </div>

    <div>
        {state.map((item,index)=>{
          return <div key={index}>
          <SkillSection 
              id={index}
              SkillName={value[index]} 
              state={state}
              value={value}
              setState={setState}
              handleDeleteSkill={handleDeleteSkill}
              key={index}/>
          </div>
        })}
    </div>
    
    
    <div>
    {
      (
        <div className="end-buttons">
          <buttom className="end-button1" onClick={handleCancel}>Cancel</buttom>
          <buttom className="end-button2" onClick={saveCacheMemory} >Save</buttom>
        </div>
      )
    }
  </div>
  
</div>
    );
}
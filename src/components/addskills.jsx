import React, { useState } from "react";
import SpecialPlus from "../icons/plusspecial";
import { TextField, Autocomplete, MenuItem } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import SkillSection from "../components/skillsection";
import Search from "../icons/search";
import { json, useNavigate } from "react-router-dom";



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
    const newskills = [];
    
    function handleStateChange(newValue){
        // if delete 
        if(state.length>newValue.length){
        const newstate = state.filter(item => newValue.includes(item.skillname));
        //state 
        setState(newstate);
      }
        // adding element before any deletion
        else{
        setState([...state,{
                            id:newValue.length-1,
                            skillname:newValue[newValue.length-1],
                            yrsofexp:0,
                            level:{
                                    isbegineer:false,
                                    isadvanced:false,
                                    isexpert:false,
                                    ismaster:false,
                                    isstar:false
                                  },
                            proficiency:'50',
                            }]);
                          }
                        }
    
    function handleDeleteSkill(skillname){
        const moifiedstate = state.filter(item => item.skillname !=skillname)
        const moifiedvalue1 = value.filter(item => item !=skillname)
        setState(moifiedstate)
        setValue(moifiedvalue1)
    }
    
    //saving data to local memory
    const saveCacheMemory = () => {localStorage.setItem("userData", JSON.stringify(state));};

    
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
import React from "react";
import { TextField, Autocomplete, MenuItem } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const names = [
  "UX Design",
  "Graphic Design",
  "Frontend Develoment",
  "Backend Developer",
  "Machine Learning Engineer"
];

export default function MuiSearchbar() {
    

  return (

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
      getOptionLabel={(option) => option}
      onChange={(newValue)=>{
        console.log(newValue);
        setValue(newValue)}}
        disableCloseOnSelect
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
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
  );
}
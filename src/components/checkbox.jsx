import React, { useState } from "react";
import "../pages/page2.css"
export default function Checkbox({props}) {

    const [checked1, setChecked] = useState(false);
    console.log(checked1);
    
    return(
        <label class="container checkbox1" onChange={(event)=>{setChecked(event.target.checked)}}>{props}<input type="checkbox" /><span class="checkmark"></span></label>
    )
}


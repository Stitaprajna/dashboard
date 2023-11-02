import React from "react"
import Search from "../icons/search"


export default function NormalSearchbar(){

    const [text,SetText] = useState("");
    console.log(text);
    
    return(
        <div className="rectangle1">
            
        <input type="text" className="searchbar"  onChange={(e)=>SetText(e.target.value)}></input>
        <div className="svg4">
            <Search/>
        </div>
    </div>
    )
}

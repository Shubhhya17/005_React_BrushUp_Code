// Implement the Toggle Switch 
import React, { use, useState } from "react";
const ToggleSwitch = ()=>{
    const [isOn, setIsOn] =useState(false)
    const[isDark, setIsDark] = useState(false) 

return(
    <>
    <button onClick={()=> setIsOn(!isOn)}>{isOn ? "ON" : "OFF"} </button>
    <button onClick={()=>setIsDark(!isDark)}>{isDark ? "Dark" : "Light"}</button>
    </>
)
}
export default ToggleSwitch;



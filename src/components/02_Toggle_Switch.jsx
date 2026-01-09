// Implement the Toggle Switch 
import React, { use, useState } from "react";

const ToggleSwitch = ()=>{

    const [isOn , setIsOn] = useState(false);

    return(    
        <>
           <button onClick={()=> setIsOn(!isOn)}>{isOn ? "ON" : "OFF"}</button>
            <button onClick={()=>setIsOn(!isOn)}>{isOn ? 'Light': " Dark"} </button>
        </>
    )
}
export default ToggleSwitch



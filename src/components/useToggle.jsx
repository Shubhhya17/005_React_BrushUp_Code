<<<<<<< Updated upstream
import React from 'react'
=======
import React, { useState } from 'react'

const useToggle = (defaultVal) => {
    const [value,setValue] = useState();

    function toggleValue(val){
        if(typeof val !='boolean'){
            setValue(!value)
        }else{
            setValue(val)
        }
    }  
  return ( 

<>
<button>Toggle Heading</button>
<button>Hide Heading</button>
<button>Show Heading</button>
</>
>>>>>>> Stashed changes

const useToggle = () => {
  return (
    <div>useToggle</div>
  )
}

export default useToggle
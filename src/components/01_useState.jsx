import React, { useState } from 'react'

const UsestateEx = () => {
    const [count, setCount] = useState(0)//o is Intial Value
          //count is Current value and setCount is update State 
  return (
    <>
   <p>count</p>

   <button onClick={()=> setCount (count + 1) }> Increase</button>

   <button onClick = {()=> setCount (count - 1)}> Decrease </button>
    </>
  )
}

export default UsestateEx
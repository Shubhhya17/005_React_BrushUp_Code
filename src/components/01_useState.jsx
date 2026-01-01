import React, { useState } from 'react'

const UsestateEx = () => {
  const [count, setCount] = useState(0);
    return (
    <>
    <p>{count}</p>
    <button onClick={()=> setCount(count+1)}> Increment</button>
    <button onClick={()=> setCount(count-2)}> Decrement </button>
    </>
  )
}

export default UsestateEx
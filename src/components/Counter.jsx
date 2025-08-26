// Example of UseRef

import React, { useRef } from 'react'
const Counter = () => {

  const inputRef=useRef(null);

  const inputHandler = ()=>{
    console.log(inputRef);
    // inputRef.current.style.color="red"
    inputRef.current.placeholder="Enter Pasword"
  }
const toggleHandler=()=>{
  if(inputRef.current.style.display != 'none'){
    inputRef.current.style.display='none'
  }else{
    inputRef.current.style.display='inline'
  }
}
  return (
   <>
   <h1>UseRef</h1>
   
   <button onClick={toggleHandler}>Toggle </button>


   <input ref={inputRef} type='text' placeholder='Enter the Name '></input>

   <button onClick={inputHandler}>Hrlloe </button>
   </>
  )
}

export default Counter
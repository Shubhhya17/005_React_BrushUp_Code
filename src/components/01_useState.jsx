import React, { useState } from "react";

const Counter2 = ()=> {

  const [value , setValue] = useState(0);


  return(
    <>
    <h1>{value}</h1>
    <button onClick={(setValue(value + 1))}> Click Me</button>
    </>
  )

}
export default Counter2
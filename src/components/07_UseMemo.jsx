import React, { useMemo, useState } from "react";

const MyMemo = ()=>{

  const [count, setCount] = useState(0)

const double = useMemo(()=>{
  return count * 2;
}, [count])


  return(
    <>
    <p> Double {double}</p>
    <button onClick={()=> setCount(count + 1)}> + </button>
    </>
  )
}
export default MyMemo;
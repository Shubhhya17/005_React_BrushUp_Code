import React, { useState } from 'react'

const Counter2= () => {
  const [count, setCount] = useState(0);
  const counterFun = ()=>{
    setCount(count + 1)
  }
return (
  <>
  <p>{count}</p>
    <button onClick={counterFun}>Count</button>
  </>
)
}

export default Counter2
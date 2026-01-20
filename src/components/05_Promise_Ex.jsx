import React, { useEffect } from "react";

const PromiseEx  = ()=>{
  const myPromise =()=>{
    return new Promise(()=>{
      setTimeout(()=>{
        const sucess = true;

        if(sucess){
          console.log("Resolve")
        }else{
          console.log("reject")
        }
      },2000)
    })
  }

  const callPromise = async()=>{
    try{
      const result = await myPromise()
    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    callPromise();
  })
  return(
    <>
    </>
  )
}
export default PromiseEx
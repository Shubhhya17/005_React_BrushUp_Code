import React, { Suspense, lazy } from "react";

const HavyLoader = lazy(()=> import ("./HavyLoader"))

const MyLoading =()=>{

return(
  <>
  <Suspense fallback={<p>Loading...</p>}> 
  <HavyLoader/>
  </Suspense>
  </>
)
}
export default MyLoading
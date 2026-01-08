// import React, { Suspense, lazy } from 'react'

// // const HavyLoader = lazy(()=>import("./HavyLoader"))
// const HavyLoader = lazy(()=> import("./HavyLoader"))

// const LazyLoading = () => {
//   return (
//    <>
//    <p>This is Main Component</p>
// <Suspense fallback={<p>Loading...</p>}>
// <HavyLoader/>
// </Suspense>
// </>
//   )
// }

// export default LazyLoading


import React, { Suspense, lazy } from "react";

const HavyLoader = lazy(() => import("./HavyLoader"))
const LazyLoading = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <HavyLoader />
    </Suspense>
  )
}
export default LazyLoading
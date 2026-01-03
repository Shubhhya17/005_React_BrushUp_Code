import React from "react";

const Child = ({ Data }) => {
  return (
    <>
      {Data.map((item) => (
        <div key={item.id}>{item.body}</div>
      ))}
    </>
  );
};

export default Child;




// import React, { useEffect, useState } from "react";

// const Parent = () => {
//     const [data, setData] = useState();

//     const fetchData = async () => {
//         try {
//             const res = await fetch("https://jsonplaceholder.typicode.com/posts")
//             const result = await res.json()
//             setData(result)
//         } catch (error) {
//             console.log("API", error)
//         }
//     }

//     useEffect(()=>{
//         fetchData()
//     },[])

//     return (
// <>
// <Child Data={data}></Child>
// </>
//     )
// }
// export default Parent
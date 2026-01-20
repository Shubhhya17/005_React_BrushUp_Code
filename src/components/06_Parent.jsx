import axios from "axios";
import React, { useEffect, useState } from "react";



const ApiPromise2 = () => {

  let obj1 = {name: "Jonh"}
  console.log(obj1)
  let obj2 = obj1
  obj2.name = "Shubham"
  console.log(obj2)
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setData(res.data);
      console.log(res, "res");
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {data.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </>
  );
};
export default ApiPromise2;

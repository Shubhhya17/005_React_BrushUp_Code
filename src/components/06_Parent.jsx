import React, { useEffect, useState } from "react";
import Child from "./Child";

const Parent = () => {

  // ✅ data must be an ARRAY
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const result = await res.json();
      setData(result);
    } catch (error) {
      console.log("API Error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <Child Data={data} />;
};

export default Parent;

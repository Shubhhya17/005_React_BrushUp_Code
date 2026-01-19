import React, { useEffect } from "react";
import axios from "axios";

const ApiPromise = () => {

  // ✅ Promise created
  const getData = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        resolve(res.data);
      } catch (error) {
        reject(error);
      }
    });
  };

  // ✅ Promise consumed using async/await
  const callApi = async () => {
    try {
      const data = await getData();
      console.log(data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    callApi();
  }, []);

  return <></>;
};

export default ApiPromise;

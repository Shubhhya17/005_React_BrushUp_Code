import axios from "axios";
import { useEffect } from "react";

const apiPromise = () => {
  const getData = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      console.log(res?.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return <></>;
};
export default apiPromise;

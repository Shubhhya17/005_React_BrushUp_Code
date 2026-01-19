import React, { useEffect, useState } from "react";
import axios from "axios";

const SimpleApi = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const getData = async () => {
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setData(res.data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  // 🔍 filter logic
  const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <input
        type="text"
        placeholder="Search by title"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      {filteredData.map(item => (
        <p key={item.id}>{item.title}</p>
      ))}
    </>
  );
};

export default SimpleApi;

import axios from "axios";
import React, { useEffect, useState } from "react";

const Practice = () => {

    const [posts, setPosts] = useState([]);

    const APICall = async () => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
        console.log("API DATA:", res.data); 
    setPosts(res.data);
    }

    useEffect(()=>{
APICall()
    },[])

    return (
        <>
        {posts.map((items) => (
        <div key={items.id}>
          <p>{items.title}</p>
        </div>
      ))}
        </>
    )
}
export default Practice
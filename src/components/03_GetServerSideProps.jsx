import React, { useEffect, useState } from "react";

const CounterValue = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log("API Response:", data); // ✅ correct place
        setPosts(data);
      });
  }, []);

  if (!posts) return <p>Loading...</p>;

  return (
    <>
      {posts.map((post) => (
        <div key={post.id}>
          <h4>{post.id}</h4>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  );
};

export default CounterValue;

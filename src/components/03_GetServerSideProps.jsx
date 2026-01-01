import { useEffect, useState } from "react";

const CounterValue = () => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  if (!post) return <p>Loading...</p>;

  return (
    <>
      <p> Para: {post.title}</p>
      <p> Body: {post.body}</p>
    </>
  );
};

export default CounterValue;

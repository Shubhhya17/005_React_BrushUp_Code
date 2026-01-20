import React from "react";

const PairArray = () => {
  const arr = [1, "a", 2, "b", 3, "c"];
  const result = [];

  for (let i = 0; i < arr.length; i += 2) {
    result.push(arr[i] + " " + arr[i + 1]);
  }

  return (
    <div>
      <h3>Paired Output</h3>
      {result.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
};

export default PairArray;

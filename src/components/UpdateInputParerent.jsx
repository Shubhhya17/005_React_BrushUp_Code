import React, { useRef } from "react";

const UpdateInputParent = () => {
  const inputRef = useRef(null); // ✅ define at component level

  const UpdateInput = () => {
    inputRef.current.value = 1000; // update value
    inputRef.current.focus(); // focus input
  };

  return (
    <>
      <h1>Parent Div</h1>
      <input type="text" ref={inputRef} />
      <button onClick={UpdateInput}> Update the field</button>
    </>
  );
};

export default UpdateInputParent;

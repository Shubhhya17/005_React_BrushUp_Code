import React, { useEffect, useState } from "react";

const Practice = () => {
  const [value, setValue] = useState(1);

  useEffect(() => {
    if (value >= 20) return;

    const timer = setTimeout(() => {
      setValue((prev) => prev + 1);
    }, 1000);

    return () => setTimeout(timer);
  }, [value]);

  return(
    <>
    <p>{value}</p>
    </>
  )
};
export default Practice;

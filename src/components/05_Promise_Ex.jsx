import React, { useEffect } from "react";

const PromiseEx = () => {
  const myPromise = () => {
    return new Promise(() => {
      setTimeout(() => {
        const sucess = true;

        if (sucess) {
          console.log("resolve");
        } else reject(console.log("reject"));
      }, 1000);
    });
  };

  const callPromise = async () => {
    try {
      const result = await myPromise();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    callPromise;
  }, []);

  return <></>;
};
export default PromiseEx;

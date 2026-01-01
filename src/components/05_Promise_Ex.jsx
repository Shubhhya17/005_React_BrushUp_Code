import React, { useEffect } from "react";

const UserData = () => {
  function getUserData() {
    return new Promise((resolve, reject) => {
      fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((response) => {
          if (!response.ok) {
            return reject("Failed to fetch User Data");
          }
        })
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }
  useEffect(() => {
    getUserData()
      .then((user) => console.log("User Data", user))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
     <p>
    {user.address.city} </p>
    </>
  );
};

export default UserData;

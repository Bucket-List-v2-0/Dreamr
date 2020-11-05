import React, { useState, createContext } from "react";

export const BucketContext = createContext();

export const BucketProvider = (props) => {
  // set state
  const [users, setUser] = useState([
    {
      username: "TEST",
      loggedIn: "false",
    },
  ]);

  return (
    <BucketContext.Provider value={[users, setUser]}>
      {props.children}
    </BucketContext.Provider>
  );
};

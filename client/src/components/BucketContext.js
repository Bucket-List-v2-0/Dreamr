import React, { useState, createContext } from "react";
export const BucketContext = createContext();

export const BucketProvider = (props) => {
  //set state
  const [user, setUser] = useState({
    username: "",
    loggedIn: "false",
  });

  return (
    <BucketContext.Provider value={{ user, setUser }}>
      {props.children}
    </BucketContext.Provider>
  );
};

import React, { useState, useEffect, useContext} from "react";
import axios from "axios";
import Login from "./components/Login";
import User from "./components/User";

function App() {


  // const {user, setUser} = useContext(BucketContext)

  // setUser({
  //   username: 'little',
  //   loggedIn: "true",
  // })

  return(
    
  // <BucketProvider>
  //     <Login />
      <User/>
    
  // {/* </BucketProvider> */}
  )
  
}
  // useEffect(() => {
  //   axios
  //     .get("/user", { username: user.username, password: user.password })
  //     .then(({ data }) => {
  //       return setUser({
  //         username: data.user.username,
  //         bucket_list: data.user.bucket_list,
  //         loggedIn: data.user.loggedIn,
  //       });
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  // function logIn(userData) {
  //   setUser({
  //     username: userData.username,
  //     bucket_list: userData.bucket_list,
  //     loggedIn: userData.loggedIn,
  //   });
  // }

  // if (user.loggedIn === "true")
  //   return <User userName={user.username} logIn={logIn} />;
  // return <Login logIn={logIn} />;


export default App;

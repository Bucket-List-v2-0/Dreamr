import React, { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "./UserCard";

function User({ userName }) {
  const [Name, setName] = useState("hey");
  const [list, setList] = useState(["try this", "might go and jump off cliff"]);

  // const [activity, setActivity] = useState({
  //   username: userName,
  //   actDesc: "",
  // });

  // const { listItem } = activity;
  // const [userList, setUserList] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("/api/all")
  //     .then(({ data }) => {
  //       console.log(data);
  //       setUserList(data);
  //       return true;
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  // const users = userList.map((user, i) => {
  //   return <UserCard name={user.username} bucket={user.bucket_list} key={i} />;
  // });

  // function saveActivity(e) {
  //   fetch("/api/saveActivity", {
  //     method: "POST",
  //     headers: {
  //       // Accept: 'application/json',
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(activity),
  //   })
  //     .then((res) => res.json())
  //     .catch((err) => console.log(err));
  //   setUserList(activity);
  //   console.log(activity);
  //   console.log(listItem);
  //   // console.log(e);
  // }
  return (
    <a href="/auth/google">Sign In with Google</a>
    // <div className="user-page">
    //   <div className="bucket-title">Type in your Bucket List</div>
    //   <div className="activity-input">
    //     <input
    //       type="text"
    //       className="bucket-input"
    //       placeholder="Activity Title"
    //       value={listItem || ""}
    //       onChange={(e) =>
    //         setActivity({ ...activity, listItem: e.target.value })
    //       }
    //     />
    //   </div>
    //   <div className="bucket-button">
    //     <button className="bucket-btn" onClick={setUserList} type="submit">
    //       Save
    //     </button>
    //   </div>
    //   <div className="users__container">{users}</div>
    // </div>
    // <UserCard name={Name} bucket={list} key={0} />
  );
}

export default User;

import React from "react";

function UserCard({ name, bucket }) {
  const items = bucket.map((item) => {
    return <p>{item}</p>;
  });
  return (
    <div className="card">
      <h1>{name}</h1>
      {items}
    </div>
  );
}

export default UserCard;

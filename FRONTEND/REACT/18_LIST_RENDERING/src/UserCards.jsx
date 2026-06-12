import React from "react";

const UserCards = ({ userDetails }) => {
  return (
    <div className="user">
      {userDetails.map((item, key) => (
        <h1 key={key}>{item.toUpperCase()}</h1>
      ))}
    </div>
  );
};

export default UserCards;

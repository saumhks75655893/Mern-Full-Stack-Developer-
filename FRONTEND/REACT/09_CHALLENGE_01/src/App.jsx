import React from "react";
import UserCard from "./assets/components/UserCard";
import users from "./assets/components/Users.json";
const App = () => {
  return (
    <div className="grid grid-cols-4 gap-3 m-4 max-[840px]:grid-cols-2 max-[540px]:grid-cols-1">
      {users.map((elem, index) => {
        return (
          <UserCard
            key={index}
            title={elem.title}
            jobTitle={elem.jobTitle}
            imgLink={elem.imgLink}
            likeCount={elem.likeCount}
            commentCount={elem.commentCount}
            shareCount={elem.shareCount}
          />
        );
      })}
    </div>
  );
};

export default App;

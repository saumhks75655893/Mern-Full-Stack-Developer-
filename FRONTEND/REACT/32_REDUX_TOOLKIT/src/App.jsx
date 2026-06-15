import React, { useEffect } from "react";
import Counter from "./store/components/Counter";
import { useDispatch } from "react-redux";
import { changeName } from "./store/feature/counter/counterSlice";
import Users from "./store/components/Users";
import { fetchUser } from "./store/feature/user/userSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, []);
  return (
    <>
      <div>
        <Counter />
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => dispatch(changeName(e.target.value))}
        />
      </div>

      <Users />
    </>
  );
};

export default App;

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUser } from "../feature/user/userSlice";
import { useSelector } from "react-redux";
const Users = () => {
  const { users, error } = useSelector((state) => state.user);
  console.log(users, error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return <div></div>;
};

export default Users;

import React from "react";
import Button from "@mui/material/Button";
import AdjustIcon from "@mui/icons-material/Adjust";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Stack from "@mui/material/Stack";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";

const App = () => {
  return (
    <>


        <Navbar />


      <Stack
        direction="row"
        sx={{ justifyContent: "space-between" }}
        spacing={2}
      >
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </>
  );
};

export default App;

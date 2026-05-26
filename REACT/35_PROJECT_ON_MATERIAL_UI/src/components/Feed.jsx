import React from "react";
import FeedCard from "./FeedCard";
import Box from "@mui/material/Box";

const Feed = () => {
  return (
    <Box spacing={2} sx={{ flex: 4 }}>
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
    </Box>
  );
};

export default Feed;

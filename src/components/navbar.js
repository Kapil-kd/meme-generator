import { Box, Typography } from "@mui/material";
import React from "react";

export const Navbar = () => {
  return (
    <Box>
      <Typography
        variant="h4"
        sx={{
          color: "white",
          backgroundColor: "darkblue",
          textAlign: "center",
          padding: "10px",
        }}
      >
        Meme Generator
      </Typography>
    </Box>
  );
};

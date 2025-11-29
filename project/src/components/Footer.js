import React from "react";
import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "primary.main",
        color: "white",
        textAlign: "center",
        py: 2,
        mt: 4,
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} HavenQuest | All rights reserved
      </Typography>
    </Box>
  );
}

export default Footer;

import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

export const DenseAppBar: React.FC = () => {
  return (
    <Box component="div" sx={{ flexGrow: 1 }}>
      <AppBar color={"primary"} position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            3D Modeling Portfolio
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

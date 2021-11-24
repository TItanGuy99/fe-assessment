/* Component for the Top Bar */
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Header() {
  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Box m={1}>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              Company Manager
            </Typography>
          </Box>
        </AppBar>
      </Box>
    </React.Fragment>
  );
}

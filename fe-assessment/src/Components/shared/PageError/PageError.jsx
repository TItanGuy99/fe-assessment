import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function PageError() {
  return (
    <React.Fragment>
      <Box m={2} ml={4} display="flex">
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button variant="contained" color="primary">
            Go Back
          </Button>
        </Link>
      </Box>        
      <Box mt={4}>
        <Typography sx={{ fontSize: 44 }} color="text.primary" gutterBottom>
          The page has not been found =/
        </Typography>
      </Box>
    </React.Fragment>
  );
}

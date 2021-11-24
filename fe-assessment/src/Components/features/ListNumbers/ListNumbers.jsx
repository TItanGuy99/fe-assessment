/* Component for listing the numbers */
import React from "react";
import Tables from "../../shared/Tables/Tables";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function ListNumbers() {
  const { companyId } = useParams();
  return (
    /* Sending props to the Tables component */
    <React.Fragment>
      <Box m={2} ml={4} display="flex">
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button variant="contained" color="primary">
            Go Back
          </Button>
        </Link>
      </Box>
      <Tables
        url="http://localhost:3000/phone_numbers"
        path="/number/"
        idSelector = {companyId}
        fieldSelector = "company_id"
        columns={["Number", "Type"]}
        pKey={["id", "type"]}
      ></Tables>
    </React.Fragment>
  );
}

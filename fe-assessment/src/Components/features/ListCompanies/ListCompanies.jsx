/* Component for listing the companies */
import React from "react";
import Tables from "../../shared/Tables/Tables";

export default function ListCompanies() {
  return (
    /* Sending props to the Tables component */
    <React.Fragment>
      <Tables
        url="http://localhost:3000/companies"
        path="/company/"
        columns={["Company Name", "Vatin"]}
        pKey={["name", "vatin"]}
      ></Tables>
    </React.Fragment>
  );
}

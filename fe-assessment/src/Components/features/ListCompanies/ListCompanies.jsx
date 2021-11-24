/* Component for listing the companies */
import React from "react";
import Tables from "../../shared/Tables/Tables";
import URL_BASE from "../../../Services/URL_BASE";

export default function ListCompanies() {
  return (
    /* Sending props to the Tables component */
    <React.Fragment>
      <Tables
        url= {URL_BASE + "companies"}
        path="/company/"
        columns={["Company Name", "Vatin"]}
        pKey={["name", "vatin"]}
      ></Tables>
    </React.Fragment>
  );
}

/* Component to show the data in the table */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../../Services/Api";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Tables({
  url,
  path,
  idSelector,
  fieldSelector,
  columns,
  pKey,
}) {
  const [rows, setRows] = useState([]);
  let hasFilter = false;

  /* 
    Check if props idSelector and fieldSelector have been passed
    to the component;
  */
  if (idSelector !== undefined && fieldSelector !== undefined) {
    hasFilter = true;
  }

  /* 
    When component is mounted get the data
  */
  useEffect(() => {
    api.get(url).then(
      (response) => {
        /* 
          If the filters does not have been passed on the props,
          load all the data
        */        
        if (!hasFilter) {
          setRows(response.data);
        /* 
          Or Else filter by the ID
        */            
        } else {
          let newData = [];

          response.data.forEach((element) => {
            if (element[fieldSelector] === parseInt(idSelector)) {
              newData.push(element);
            }
          });

          setRows(newData);
          console.log(rows);
        }
      },
      /* 
        Error Handling
      */       
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return (
    /* 
      Build the DOM if there is data.
      If not show a message.
    */    
    <React.Fragment>
      {rows.length > 0 ? (
        <Box sx={{ flexGrow: 1 }} m={4}>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="Companies list"
            >
              <TableHead>
                <TableRow>
                  {columns.map((column, index) => (
                    <TableCell key={index}>{column}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      <Link
                        to={path + row.id}
                        style={{ textDecoration: "none" }}
                      >
                        {row[pKey[0]]}
                      </Link>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row[pKey[1]]}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      ) : (
        <Box mt={4}>
          <Typography sx={{ fontSize: 32 }} color="text.primary" gutterBottom>
            No data for this company.
          </Typography>
        </Box>
      )}
    </React.Fragment>
  );
}

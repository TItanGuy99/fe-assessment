import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useParams, useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import api from "../../../Services/Api";

export default function ListNumbers() {
  const { numberId } = useParams();
  const navigate = useNavigate();
  const [cardInfo, setInfo] = useState([]);
  
  console.log(numberId);

  useEffect(() => {
    api.get("http://localhost:3000/phone_numbers/" + numberId).then(
      (response) => {
        setInfo(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);  

  return (
    <React.Fragment>
      <Box m={2} ml={4} display="flex">
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate(-1)}
        >
          Go Back
        </Button>
      </Box>
      <Box
        display="flex"
        flexDirection="center"
        justifyContent="center"
        sx={{ flexGrow: 1 }}
      >
        <Card sx={{ minWidth: 275, maxWidth: 300, height: 100 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 22 }}
              color="text.primary"
              gutterBottom
            >
              {cardInfo.id}
            </Typography>
            <Typography
              sx={{ fontSize: 22 }}
              color="text.primary"
              gutterBottom
            >
              {cardInfo.type}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </React.Fragment>
  );
}

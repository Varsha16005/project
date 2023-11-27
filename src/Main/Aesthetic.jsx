import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

export default function Aesthetic() {
  return (
    <Card sx={{ maxWidth: 345, zIndex: 1 }}>
      <Link to="/pathap" style={{ textDecoration: "none", color: "black" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyu2uwCtYR4-tkuHFflrzcXdFWO7WRAXEEdg&usqp=CAU"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Asthetic Plants
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Aesthetic plants are stylish, trendy plants which add visual
              interest and variety to a space. Often these plants are placed
              indoors, though depending on where you live and what your climate
              is like, some cute aesthetic plants are also available for outdoor
              use.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}

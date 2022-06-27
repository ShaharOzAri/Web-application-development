import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useParams } from "react-router-dom";

export default function CategoryPage() {
  let { category } = useParams();
  return <h1 sx={{ mx: 5 }}>{category}</h1>;
}

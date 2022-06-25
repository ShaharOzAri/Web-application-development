import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { getProduct } from "./ProductData";
import { useEffect } from "react";
import { useState } from "react";
import { Box, Grid, TextField } from "@mui/material";
import ProductCard from "./ProductCard";

const ProductSection = (props) => {
  const products = props.products;

  return (
    <Grid
      container
      spacing={1}
      direction="row"
      alignItems="center"
      justifyContent="center"
    >
      {products.map((product) => {
        return (
          <Grid item xs={3}>
            <ProductCard product={product} />;
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ProductSection;

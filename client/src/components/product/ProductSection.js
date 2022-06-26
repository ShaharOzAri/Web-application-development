import * as React from "react";
import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";
import { getAllProducts } from "../../controller/ProductController";

const ProductSection = () => {
  const [products, setProducts] = useState([]);

  const getAll = async () => {
    const response = await getAllProducts();
    if (response.status == 200) {
      setProducts(response.data.msg);
    } else {
      alert("something went wrong");
    }
  };

  useEffect(() => {
    getAll();
  }, []);

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

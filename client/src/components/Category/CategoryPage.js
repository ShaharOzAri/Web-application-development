import * as React from "react";
import { useParams } from "react-router-dom";
import { getProductsByCategory } from "../../controller/ProductController";
import { useState, useEffect } from "react";
import ProductCard from "../product/ProductCard";
import { Grid } from "@mui/material";

export default function CategoryPage() {
  let { category } = useParams();

  const [products, setProducts] = useState(null);

  const getProducts = async () => {
    const res = await getProductsByCategory(category);
    if (res.status == 200) {
      setProducts(res.data.msg);
    }
  };

  useEffect(() => {
    setProducts(null);
    getProducts();
  }, []);

  useEffect(() => {
    getProducts();
  }, [category]);

  return (
    <div>
      {products != null ? (
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
      ) : (
        ""
      )}
    </div>
  );
}

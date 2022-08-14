import * as React from "react";
import { useParams } from "react-router-dom";
import { getProductsByCategory } from "../../controller/ProductController";
import { useState, useEffect } from "react";
import ProductCard from "../product/ProductCard";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import FilterSection from "./FilterSection";

export default function CategoryPage() {
  let { category } = useParams();

  const [products, setProducts] = useState(null);
  const [allProducts, setAllProducts] = useState(null);
  const [filterTab, setFilterTab] = useState(false);

  const getProducts = async () => {
    const res = await getProductsByCategory(category);
    if (res.status == 200) {
      setProducts(res.data.msg);
      setAllProducts(res.data.msg);
      setFilterTab(false);
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
    <Container maxWidth="xl">
      <FilterSection
        products={products}
        setProducts={setProducts}
        allProducts={allProducts}
        filterTab={filterTab}
        setFilterTab={setFilterTab}
      ></FilterSection>
      {products != null ? (
        <Grid
          container
          spacing={1}
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          {products.map((product, index) => {
            return (
              <Grid item xs={3} key={index}>
                <ProductCard product={product} />;
              </Grid>
            );
          })}
        </Grid>
      ) : (
        ""
      )}
    </Container>
  );
}

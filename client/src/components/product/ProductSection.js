import * as React from "react";
import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";
import { getAllProducts } from "../../controller/ProductController";
import { useAuth } from "../Utils/auth";
import Button from "@mui/material/Button";
import { Container } from "@mui/system";
import { useNavigate } from "react-router-dom";

const ProductSection = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const getAll = async () => {
    const response = await getAllProducts();
    if (response.status == 200) {
      setProducts(response.data.msg);
    } else {
      alert("something went wrong");
    }
  };

  const handleAddProduct = () => {
    navigate("/admin/addProduct");
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
      {auth.user == null || JSON.parse(auth.getUser()).role == "client" ? (
        ""
      ) : (
        <Grid xs={12}>
          <Container>
            <Button
              fullWidth
              variant="contained"
              sx={{ m: 2, color: "black" }}
              onClick={handleAddProduct}
            >
              Add Product
            </Button>
          </Container>
        </Grid>
      )}
      {products.slice(0, 4).map((product) => {
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

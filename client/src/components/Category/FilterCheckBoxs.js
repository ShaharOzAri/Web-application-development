import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {
  Button,
  ButtonGroup,
  Experimental_CssVarsProvider,
  Typography,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import { useState, useEffect } from "react";
import { Container } from "@mui/system";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function FilterCheckBoxes(props) {
  const setProducts = props.setProducts;
  const products = props.products;
  const allProducts = props.allProducts;
  const [productStyle, setProductStyle] = useState([
    "cut out",
    "engraved",
    "zircon",
  ]);
  const [productMaterial, setProductMaterial] = useState([
    "sterling silver",
    "gold plated",
    "rose gold",
  ]);

  const handleStyleChange = (e) => {
    if (e.target.checked === true) {
      setProductStyle([...productStyle, e.target.value]);
    } else {
      setProductStyle(productStyle.filter((item) => item != e.target.value));
    }
  };

  //   useEffect(() => {}, [allProducts]);
  useEffect(() => {
    setProducts([
      ...allProducts.filter((product) => productStyle.includes(product.type)),
    ]);
  }, [productStyle]);

  return (
    <Box>
      <Container maxWidth="xl" sx={{ color: "black", bgcolor: "white" }}>
        <Grid container>
          <Grid item xs={2}>
            <Typography
              sx={{
                textAlign: "center",
                fontWeight: "bold",
                mt: 2,
                fontSize: "120%",
              }}
            >
              Style
            </Typography>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked value="cut out" />}
                label="Cut Out"
                onChange={handleStyleChange}
              />
              <FormControlLabel
                control={<Checkbox defaultChecked value="zircon" />}
                label="Zircon"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked value="engraved" />}
                label="Engraved"
              />
            </FormGroup>
          </Grid>
          <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
          <Grid item xs={2}>
            <Typography
              sx={{
                textAlign: "center",
                fontWeight: "bold",
                mt: 2,
                fontSize: "120%",
              }}
            >
              Material
            </Typography>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked value="sterling silver" />}
                label="Sterling Silver"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked value="gold plated" />}
                label="Gold Plated"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked value="rose gold" />}
                label="Rose Gold"
              />
            </FormGroup>
          </Grid>
          <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
          <Grid item xs={2}>
            <Typography
              sx={{
                textAlign: "center",
                fontWeight: "bold",
                mt: 2,
                fontSize: "120%",
              }}
            >
              Price
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

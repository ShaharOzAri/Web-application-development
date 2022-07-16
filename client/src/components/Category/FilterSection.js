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
import AddIcon from "@mui/icons-material/Add";
import { useState, useEffect } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import { Container } from "@mui/system";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FilterCheckBoxes from "./FilterCheckBoxs";

export default function FilterSection(props) {
  const products = props.products;
  const setProducts = props.setProducts;
  const allProducts = props.allProducts;
  const filterTab = props.filterTab;
  const setFilterTab = props.setFilterTab;

  const openFilterTab = () => {
    setFilterTab(!filterTab);
  };

  return (
    <Box
      sx={{
        flexGrow: 2,
        border: "1px solid white",
        my: 2,
        alignItems: "right",
      }}
    >
      <Box>
        <ButtonGroup
          variant="text"
          aria-label="text button group"
          sx={{ alignItems: "right" }}
        >
          <Button sx={{ color: "black", mx: 2 }} onClick={openFilterTab}>
            Filter
            {filterTab === false ? (
              <AddIcon sx={{ height: "80%", ml: 2 }}></AddIcon>
            ) : (
              <RemoveIcon sx={{ height: "80%", ml: 2 }}></RemoveIcon>
            )}
          </Button>
          <Divider orientation="vertical" flexItem />
          <Button sx={{ color: "black", mx: 2 }}>
            Sort
            <AddIcon sx={{ height: "80%", ml: 2 }}></AddIcon>
          </Button>
        </ButtonGroup>
      </Box>
      {filterTab === true ? (
        <FilterCheckBoxes
          setProducts={setProducts}
          products={products}
          allProducts={allProducts}
        ></FilterCheckBoxes>
      ) : (
        ""
      )}
    </Box>
  );
}

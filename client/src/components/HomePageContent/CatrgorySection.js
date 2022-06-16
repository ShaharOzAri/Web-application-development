import * as React from "react";
import Grid from "@mui/material/Grid";
import marroco from "../images/maroco.png";
import italic from "../images/italic.png";
import CategoryCard from "./CategoryCard";
import { Paper } from "@mui/material";
import { Box } from "@mui/system";

export default function CategorySection(props) {
  var items = [
    {
      src: marroco,
      alt: "Marroco Food",
      Title: "FROM MARROCO",
    },
    {
      src: italic,
      alt: "Italian Food",
      Title: "FROM ITALY",
    },
  ];
  return (
    <Grid
      columns={24}
      sx={{
        flexGrow: 2,
        textAlign: "center",
        marginBottom: 5,
      }}
      container
    >
      {items.map((item, i) => (
        <Grid
          item
          xs={24}
          md={12}
          justifyContent="center"
          sx={{ alignContent: "center", padding: "20px" }}
        >
          <CategoryCard sx={{ margin: "auto" }} key={i} item={item} />
        </Grid>
      ))}
    </Grid>
  );
}

import * as React from "react";
import MyCarousel from "./MyCarousel";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { Container } from "@mui/system";
import CategorySection from "./CatrgorySection";
import BestSeller from "./BestSeller";

function Temp() {
  return (
    <>
      <Container
        maxWidth="xxxl"
        sx={{ bgcolor: "#eaece5", fontFamily: "monospace", letterSpacing: 4 }}
      >
        <MyCarousel></MyCarousel>
        <CategorySection></CategorySection>
        <BestSeller></BestSeller>
      </Container>
    </>
  );
}

export default Temp;

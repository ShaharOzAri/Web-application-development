import * as React from "react";
import MyCarousel from "../components/images/MyCarousel";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import "../app.css";
import ResponsiveAppBar from "../components/TempTopBar";
import { Container } from "@mui/system";
import CategorySection from "../components/images/CatrgorySection";
import BestSeller from "../components/images/BestSeller";

function Temp() {
  return (
    <>
      <Container
        maxWidth="xxxl"
        sx={{ bgcolor: "#eaece5", fontFamily: "monospace", letterSpacing: 4 }}
      >
        <ResponsiveAppBar></ResponsiveAppBar>
        <MyCarousel></MyCarousel>
        <CategorySection></CategorySection>
        <BestSeller></BestSeller>
      </Container>
    </>
  );
}

export default Temp;

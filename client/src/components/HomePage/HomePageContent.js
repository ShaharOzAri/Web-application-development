import * as React from "react";
import MyCarousel from "../UI/Carousel/Carousel";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { Container } from "@mui/system";
import CategorySection from "./CatrgorySection";
import BestSeller from "./BestSeller";
import VideoPlayer from "./VideoPlayer";
import Footer from "./Footer";

function Temp() {
  return (
    <>
      <Container maxWidth="xxxl">
        <MyCarousel></MyCarousel>
        <CategorySection></CategorySection>
        <BestSeller></BestSeller>
        <VideoPlayer></VideoPlayer>
        <Footer></Footer>
      </Container>
    </>
  );
}

export default Temp;

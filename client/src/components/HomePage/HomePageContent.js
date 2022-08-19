import * as React from "react";
import MyCarousel from "../UI/Carousel/Carousel";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { Container } from "@mui/system";
import CategorySection from "../Category/CatrgorySection";
import BestSeller from "./BestSeller";
import ProductCard from "../product/ProductCard";
import ProductSection from "../product/ProductSection";
import VideoPlayer from "./VideoPlayer";
import Footer from "./Footer";
import ChatIcon from "./ChatIcon";
import CurrenctWebService from "./CurrencyWebService";

function HomePageContent() {
  return (
    <>
      <Container maxWidth="xxxl">
        <MyCarousel></MyCarousel>
        <CategorySection></CategorySection>
        <BestSeller></BestSeller>
        <ProductSection></ProductSection>
        <VideoPlayer></VideoPlayer>
        {/* <ChatIcon></ChatIcon> */}
        {/* <CurrenctWebService></CurrenctWebService> */}
        <Footer></Footer>
      </Container>
    </>
  );
}

export default HomePageContent;

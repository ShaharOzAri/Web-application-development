import * as React from "react";
import MyCarousel from "../UI/Carousel/Carousel";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { Container } from "@mui/system";
import CategorySection from "./CatrgorySection";
import BestSeller from "./BestSeller";
import ProductCard from "../product/ProductCard";
import ProductSection from "../product/ProductSection";

const products = [
  {
    name: "classic",
    price: "29.90",
    description: "name necklace",
    images: ["https://cdn.onecklace.com/products/1330/product_1330_1_730.jpeg"],
    material: "silver",
    type: "necklace",
    category: "necklace",
  },
  {
    name: "monogram",
    price: "40.90",
    description: "monogram necklace",
    images: ["https://cdn.onecklace.com/products/1612/product_1612_1_730.jpeg"],
    material: "silver",
    type: "necklace",
    category: "necklace",
  },
];

function Temp() {
  return (
    <>
      <Container maxWidth="xxxl">
        <MyCarousel></MyCarousel>
        <CategorySection></CategorySection>
        <BestSeller></BestSeller>
        <ProductSection products={products}></ProductSection>
      </Container>
    </>
  );
}

export default Temp;

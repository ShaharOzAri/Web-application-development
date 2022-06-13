import ProductCard from "./product/ProductCard";
import ProductCardCart from "./shoppingCart/ProductCard";
import ShoppingCart from "./shoppingCart/ShoppingCart";
import * as React from "react";
import "./app.css";

function App() {
  return (
    <>
      <ProductCard></ProductCard>
      <ShoppingCart></ShoppingCart>
    </>
  );
}

export default App;

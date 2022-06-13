import ProductCard from "./components/product/ProductCard";
import ProductCardCart from "./components/shoppingCart/ProductCard";
import ShoppingCart from "./components/shoppingCart/ShoppingCart";
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

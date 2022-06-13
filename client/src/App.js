import ProductCard from "./components/product/ProductCard";
import ProductCardCart from "./components/shoppingCart/ProductCard";
import ShoppingCart from "./components/shoppingCart/ShoppingCart";
import * as React from "react";
import MyCarousel from "./components/images/MyCarousel";
import "./app.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

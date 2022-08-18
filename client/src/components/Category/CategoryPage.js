import * as React from "react";
import { useParams } from "react-router-dom";
import { getProductsByCategory } from "../../controller/ProductController";
import { useState, useEffect } from "react";
import ProductCard from "../product/ProductCard";
import TitleDivider from "../UI/TitleDivider";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import FilterSection from "./FilterSection";

export default function CategoryPage() {
  let { category } = useParams();

  const [products, setProducts] = useState(null);
  const [allProducts, setAllProducts] = useState(null);
  const [filterTab, setFilterTab] = useState(false);

  const getProducts = async () => {
    const res = await getProductsByCategory(category);
    if (res.status == 200) {
      setProducts(res.data.msg);
      setAllProducts(res.data.msg);
      setFilterTab(false);
    }
  };

  useEffect(() => {
    setProducts(null);
    getProducts();
  }, []);

  useEffect(() => {
    getProducts();
  }, [category]);

  return (
    <div>
      <TitleDivider Title={category}></TitleDivider>
      {category != "Bracelete" ? (
        <Container
          sx={{
            color: "black",
            textAlign: "center",
            my: "15px",
          }}
        >
          {categoryText[0]}
        </Container>
      ) : (
        <Container
          sx={{
            color: "black",
            textAlign: "center",
            my: "15px",
          }}
        >
          {categoryText[1]}
        </Container>
      )}
      <Container maxWidth="xl">
        <FilterSection
          products={products}
          setProducts={setProducts}
          allProducts={allProducts}
          filterTab={filterTab}
          setFilterTab={setFilterTab}
        ></FilterSection>
        {products != null ? (
          <Grid
            container
            spacing={1}
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            {products.map((product, index) => {
              return (
                <Grid item xs={3} key={index}>
                  <ProductCard product={product} />;
                </Grid>
              );
            })}
          </Grid>
        ) : (
          ""
        )}
      </Container>
    </div>
  );
}

const categoryText = [
  " Flash your style with one of our personalized necklaces. Whether you are looking for something bright and bold, or something with a more simplistic touch, we have so many styles to choose from. Check out our name or initial necklaces for a perfect gift, or treat your mother today with a custom made necklace she’ll treasure forever. A bar necklace can go great with any outfit and an infinity necklace is a standout piece in any jewelry collection.",
  "Whatever you are looking for there is something for you with an engraved bracelet. From bangles to chains, or charms to bars, our bracelets are designed and custom made for that personalized piece you will want to wear daily.Try a leather or cord chain bracelet for a more colorful look. Choose that special name or memorable date for a truly one-off item. With a large selection of bracelets for both him and her, anything is possible.",
];

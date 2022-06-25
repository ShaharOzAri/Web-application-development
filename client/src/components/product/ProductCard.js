import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { getProduct } from "./ProductData";
import { useEffect } from "react";
import { useState } from "react";
import { Box, TextField } from "@mui/material";

const ProductCard = (props) => {
  const [product, setProduct] = useState(props.product);

  const getProductData = async () => {
    let result = await getProduct();
    if (result.status == 200) {
      setProduct(result.data);
    } else {
      //error
    }
  };

  useEffect(() => {
    // getProductData();
  }, []);

  return product != null ? (
    <Card sx={{ maxWidth: 370 }}>
      <CardMedia
        component="img"
        height="300"
        image={product.images[0]}
        alt="Classic Name Necklace"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h7"
          component="div"
          textAlign="center"
        >
          {product.name}
        </Typography>
        <Typography
          variant="body2"
          color="black"
          textAlign="center"
          fontSize="20px"
        >
          {product.price}
        </Typography>
      </CardContent>
      <CardActions style={{ justifyContent: "center" }}>
        <Button
          variant="outlined"
          size="small"
          color="secondary"
          style={{ color: "black" }}
        >
          Quick View
        </Button>
      </CardActions>
    </Card>
  ) : (
    ""
  );
};

export default ProductCard;

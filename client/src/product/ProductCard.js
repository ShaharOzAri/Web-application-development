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
import { TextField } from "@mui/material";

const ProductCard = () => {
  const [product, setProduct] = useState(null);

  const getProductData = async () => {
    let result = await getProduct();
    if (result.status == 200) {
      setProduct(result.data);
    } else {
      //error
    }
  };

  useEffect(() => {
    console.log("asd");
    getProductData();
  }, []);

  return product != null ? (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.productName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.productPrice}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small">
          Share
        </Button>
        <Button variant="outlined" size="small">
          Learn More
        </Button>
      </CardActions>
      <TextField></TextField>
    </Card>
  ) : (
    ""
  );
};

export default ProductCard;

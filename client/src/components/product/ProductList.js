import * as React from "react";
import { Container, Grid } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import ImageListItem from "@mui/material/ImageListItem";
import { CardContent } from "@mui/material";
import { useState } from "react";
import Button from "@mui/material/Button";
import { useAuth } from "../Utils/auth";

export default function ProductList(props) {
  const auth = useAuth();

  // const products = props.productList;

  const removeItemHandler = (e) => {
    var p = e.target.getAttribute("removeProduct");
    auth.removeCartProduct(p);
    updateTotalSum();
  };

  const updateTotalSum = () => {
    auth.getCartTotal();
    return (
      <div>
        {!auth.cartTotal ? (
          <p>Total price: 0 $</p>
        ) : (
          <p>Total price: {auth.cartTotal} $</p>
        )}
      </div>
    );
  };

  return (
    <Container 
      sx={{
        boxShadow: 3,
        backgroundColor: "#fff",
        width: "80%",
        mt: 3,
        borderRadius: 2,
        backgroundColor: "#FDFDFD",
      }}
    >
      <Grid item>
      <Typography
        sx={{
          display: "flex",
          fontWeight: "bold",
          justifyContent: "center",
          alignContent: "center",
          color: "black",
          fontSize: 25,
        }}
      >
        PRODUCT LIST
      </Typography>
      </Grid>
      <List sx={{ display: "flex", flexDirection: "column", color: "#F3E8DE" }}>
        {auth.cartItems != null ? (
          auth.cartItems.map((product) => {
            return (
              <Grid item>
              <ListItem
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  boxShadow: 3,
                  mb: 2,
                  borderRadius: 2,
                  backgroundColor: "#FDFDFD",
                }}
              >
                <ImageListItem sx={{ width: 200, height: 200, boxShadow: 3 }}>
                  <img src={`${product.images[0]}`} sx={{ width: "10px" }} />
                </ImageListItem>
                <CardContent
                  sx={{
                    flex: "auto",
                    flexDirection: "row",
                    fontFamily: "monospace",
                    color: "black",
                  }}
                >
                  <Grid item  sx={{display: 'flex', flexDirection: "row"}}>  
                  <Typography variant="button" sx={{ fontWeight: "bold",fontKerning:'normal', textShadow:'2px 3px 7px grey' , alignContent: "right", fontSize:20, paddingBottom:3 }} >{product.name}{" "}</Typography>
                  </Grid>
                
                <Grid item>
                  <Typography sx={{ alignContent: "left",fontSize:18, paddingBottom:2 }}><b>Price:</b> {product.price} $</Typography>
                </Grid>
                <Grid item>
                  <Grid item sx={8}>
                  <Typography sx={{ alignContent: "left",fontSize:18, paddingBottom:2 }}><b>Quantity:</b> {product.qty}</Typography>
                  </Grid>
                  <Grid item sx={{ display: 'flex', flexDirection:'right', justifyContent: "right", alignContent: "right",color: "black", fontSize: "12" }}>
                  <Button size='large'sx={{color: "black", fontSize: "12" }} removeProduct={product._id}onClick={removeItemHandler}>
                    <DeleteIcon />
                    remove
                  </Button>
                  </Grid>
                </Grid>
                </CardContent>
                {/* </Card> */}
              </ListItem>
              </Grid>

            );
          })
        ) : (
          <Grid item sx={{ display: 'flex', flexDirection:'row', justifyContent: "center", alignContent: "center",color: "#F26D7B"}}> 
          <Typography variant="button" sx={{ fontWeight: "bold",fontKerning:'normal', textShadow:'2px 3px 7px pink' , fontSize:18, paddingBottom:3, paddingTop:2 }}>
            Your cart Is Empty! <br/>
            {/* Please add some products */}
            </Typography>
          </Grid>
         
        )}
        <Typography  variant="button"
          sx={{
            display: 'flex', justifyContent: "right",
            alignContent: "right",
            color: "black",
            fontFamily: "monospace",
            backgroundColor: "#f4f4f4",
            fontWeight: "bold",
            fontSize: 20, padding:0
          }}
        >
          {updateTotalSum()}
        </Typography>
      </List>
    </Container>
  );
}

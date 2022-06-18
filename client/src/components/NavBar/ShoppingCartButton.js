import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ProductCard from "./ShoppingCartProduct";

const drawerWidth = 400;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  // justifyContent: "flex-start",
}));

export default function ShoppingCartButton(props) {
  const handleDrawerClose = () => {
    props.setOpen(false);
  };
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
        },
      }}
      variant="persistent"
      anchor="right"
      open={props.open}
    >
      <DrawerHeader sx={{ width: "100%" }}>
        <IconButton onClick={handleDrawerClose}>
          <CloseIcon />
        </IconButton>
        <Typography sx={{ textAlign: "center", margin: "auto" }}>
          Shopping Cart
        </Typography>
      </DrawerHeader>
      <Divider />
      <ProductCard></ProductCard>
    </Drawer>
  );
}

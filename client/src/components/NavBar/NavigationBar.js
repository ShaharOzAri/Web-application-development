import * as React from "react";
import { useEffect, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingCartButton from "./ShoppingCartButton";
import PersonIcon from "@mui/icons-material/Person";
import SignInButton from "./SignInButton";
import SignUpButton from "./SignUpButton";

const drawerWidth = 400;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

export default function NavigationBar() {
  const theme = useTheme();
  const [openShopping, setOpenShopping] = useState(false);
  const [openSignIn, setOpenSignIn] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);
  const [open, setOpen] = useState(false);

  // useEffect(() => {
  //   setScreenMode(screenMode);
  // }, [screenMode]);

  const handleDrawerOpen = () => {
    setOpenShopping(true);
  };

  const handleClickOpen = () => {
    setOpenSignIn(true);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ bgcolor: "#e0d9cc" }}>
        <Toolbar>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
            MikMikFood
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: "none", mx: "15px" }) }}
          >
            <ShoppingCartIcon sx={{ fontSize: "25px" }} />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleClickOpen}
            sx={{ ...(open && { display: "none", mx: "15px" }) }}
          >
            <PersonIcon sx={{ fontSize: "25px" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <ShoppingCartButton
        setOpen={setOpenShopping}
        open={openShopping}
      ></ShoppingCartButton>
      <SignInButton
        setOpen={setOpenSignIn}
        open={openSignIn}
        signUp={setOpenSignUp}
      ></SignInButton>
      <SignUpButton
        setOpen={setOpenSignUp}
        open={openSignUp}
        signIn={setOpenSignIn}
      ></SignUpButton>
    </Box>
  );
}

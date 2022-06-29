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
import ShoppingCartDrawer from "../ShoppingCart/ShoppingCartDrawer";
import PersonIcon from "@mui/icons-material/Person";
import SignInDialog from "./SignInDialog";
import SignUpDialog from "./SignUpDialog";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Utils/auth";
import ToolbarButtons from "./ToolbarButtons";

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
  const [openShopping, setOpenShopping] = useState(false);
  const [openSignIn, setOpenSignIn] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);
  const [open, setOpen] = useState(false);
  const auth = useAuth();
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpenShopping(true);
  };

  const handleClickOpen = () => {
    if (!auth.user) {
      setOpenSignIn(true);
    } else {
      if (JSON.parse(auth.getUser()).role == "admin") {
        navigate(`admin/userDetails/`);
      } else {
        navigate(`user/`);
      }
    }
  };

  const imageClick = () => {
    if (auth.user && JSON.parse(auth.getUser()).role == "admin") {
      navigate("/admin");
    } else {
      navigate("/");
    }
  };

  return (
    <Box sx={{ display: "block", mb: 5, textAlign: "center", height: 90 }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{
          bgcolor: "#e0d9cc",
          justifyContent: "center",
          height: 80,
        }}
      >
        <Toolbar>
          <ToolbarButtons></ToolbarButtons>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
            <img
              src="https://cdn.onecklace.com/images/logos/autographed_logo.webp"
              style={{ width: 160, height: "90%", cursor: "pointer" }}
              alt="Logo"
              onClick={() => imageClick()}
            />
          </Typography>
          {!auth.user || JSON.parse(auth.getUser()).role == "cilent" ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
              sx={{ ...(open && { display: "none", mx: "15px" }) }}
            >
              <ShoppingCartIcon sx={{ fontSize: "25px" }} />
            </IconButton>
          ) : (
            " "
          )}
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
      <ShoppingCartDrawer
        setOpen={setOpenShopping}
        open={openShopping}
      ></ShoppingCartDrawer>
      <SignInDialog
        setOpen={setOpenSignIn}
        open={openSignIn}
        signUp={setOpenSignUp}
      ></SignInDialog>
      <SignUpDialog
        setOpen={setOpenSignUp}
        open={openSignUp}
        signIn={setOpenSignIn}
      ></SignUpDialog>
    </Box>
  );
}

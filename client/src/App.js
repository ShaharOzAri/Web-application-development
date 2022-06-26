import * as React from "react";
import "./app.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage/HomePageContent";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import NavigationBar from "./components/NavBar/NavigationBar";
import AboutUsPage from "./pages/AboutUsPage";
import Chat from "./components/Chat/Chat";
import Map from "./components/Map/Map";
import CreateLocations from "./components/Map/CreateLocations";
import ProductPage from "./components/product/ProductPage";

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#eaece5",
      contrastText: "white",
    },
  },
});

const MyThemeComponent = styled("div")(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
}));

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <MyThemeComponent>
        <NavigationBar></NavigationBar>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/aboutus">
            <AboutUsPage />
          </Route>
          <Route path="/chat">
            <Chat />
          </Route>
          <Route path="/createLocation">
            <CreateLocations />
          </Route>
          <Route path="/maps">
            <Map />
          </Route>
          <Route path="/productPage">
            <ProductPage />
          </Route>
        </Switch>
      </MyThemeComponent>
    </ThemeProvider>
  );
}

export default App;

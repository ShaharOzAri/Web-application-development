import * as React from "react";
import "./app.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

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
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </MyThemeComponent>
    </ThemeProvider>
  );
}

export default App;

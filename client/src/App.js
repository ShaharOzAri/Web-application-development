import * as React from "react";
import "./app.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

const THEME = createTheme({});

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <div>
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;

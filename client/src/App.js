import * as React from "react";
import "./app.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePageContent";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import NavigationBar from "./components/NavBar/NavigationBar";
import AboutUsPage from "./pages/AboutUsPage";
import Chat from "./components/Chat/Chat";
import Map from "./components/Map/Map";
import CreateLocations from "./components/Map/CreateLocations";
import CategoryPage from "./components/Category/CategoryPage";
import { AuthProvider, useAuth } from "./components/Utils/auth";
import { UserDetails } from "./components/User/UserDetails";
import { AdminHomePage } from "./components/Admin/AdminHomePage";
import { RequireAuth } from "./components/Utils/RequireAuth";
import UserListItem from "./components/User/UserListItem";

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
    <AuthProvider>
      <ThemeProvider theme={customTheme}>
        <MyThemeComponent>
          <BrowserRouter>
            <NavigationBar></NavigationBar>
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/aboutus" element={<AboutUsPage />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/createLocation" element={<CreateLocations />} />
              <Route path="/category/:category" element={<CategoryPage />} />
              <Route path="/user" element={<UserDetails />} />
              <Route
                exact
                path="/admin"
                element={
                  <RequireAuth>
                    <AdminHomePage />
                  </RequireAuth>
                }
              />
              <Route
                path="/admin/user"
                element={
                  <RequireAuth>
                    <UserDetails />
                  </RequireAuth>
                }
              />
              <Route
                path="/admin/users"
                element={
                  <RequireAuth>
                    <UserListItem />
                  </RequireAuth>
                }
              />
            </Routes>
          </BrowserRouter>
        </MyThemeComponent>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;

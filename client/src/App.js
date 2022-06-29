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
import UserDetailsAdmin from "./components/User/UserDetailsAdmin";
import UserListItem from "./components/User/UserListItem";
import ProductSection from "./components/product/ProductSection";
import ProductPage from "./components/product/ProductPage";

import CheckoutPage from "./pages/CheckoutPage";
import img from "./components/images/maroco.png";

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
  const ARRAY = [{
    id:1,
    name: "first",
    image: img, 
    price: 5,
  }, {
    id:2,
    name: "second",
    image: img, 
    price: 20,
  }];



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
              <Route path="/productPage/:id" element={<ProductPage />} />

              {/* <Route path="/user" element={<UserDetails />} /> */}
              <Route path="/user/" element={<UserDetails />} />
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
                path="/admin/userDetails"
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
              <Route
                path="/admin/user/:userId"
                element={
                  <RequireAuth>
                    <UserDetailsAdmin />
                  </RequireAuth>
                }
              />
              <Route
                path="admin/products"
                element={
                  <RequireAuth>
                    <ProductSection />
                  </RequireAuth>
                }
              />
              <Route 
              path="checkout" 
              element={<CheckoutPage productList={ARRAY} />}/>
            </Routes>
          </BrowserRouter>
        </MyThemeComponent>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;

import { useAuth } from "../Utils/auth";
import * as React from "react";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { getAllCategories } from "../../controller/CategoryController";
import { useNavigate } from "react-router-dom";

const adminNavItems = ["users", "products", "orders", "statics"];

export default function ToolbarButtons() {
  const auth = useAuth();
  const [navItems, setNavItems] = useState(null);
  const navigate = useNavigate();

  const getCategoryNames = async () => {
    var categories = await getAllCategories();
    // console.log(categories.data.msg);
    if (categories.status == 200) {
      categories = Array.from(categories.data.msg);
      setNavItems(categories);
    }
  };

  useEffect(() => {
    getCategoryNames();
  }, []);

  const navigateToCategory = (filter) => {
    // 👇️ navigate to /
    navigate(`/category/${filter}`);
  };

  const navigateToPage = (filter) => {
    // 👇️ navigate to /
    navigate(`/admin/${filter}`);
  };

  if (!auth.user || auth.user.role == "client") {
    return (
      <Box
        sx={{
          display: { xs: "none", sm: "block" },
        }}
      >
        {navItems != null
          ? navItems.map((item) => (
              <Button
                edge="end"
                key={item.name}
                sx={{ color: "#fff" }}
                onClick={() => navigateToCategory(item.name)}
              >
                {item.name}
              </Button>
            ))
          : ""}
      </Box>
    );
  } else {
    return (
      <Box
        sx={{
          display: { xs: "none", sm: "block" },
        }}
      >
        {adminNavItems != null
          ? adminNavItems.map((item) => (
              <Button
                edge="end"
                key={item}
                sx={{ color: "#fff" }}
                onClick={() => navigateToPage(item)}
              >
                {item}
              </Button>
            ))
          : ""}
      </Box>
    );
  }
}

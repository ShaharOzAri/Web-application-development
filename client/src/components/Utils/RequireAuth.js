import React, { Children } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./auth";

export const RequireAuth = (props) => {
  const auth = useAuth();
  if (!auth.user) {
    console.log("no connect");
    return <Navigate to="/"></Navigate>;
  }
  if (JSON.parse(auth.getUser()).role == "client") {
    console.log("client");
    return <Navigate to="/"></Navigate>;
  }
  console.log("admin");
  return props.children;
};

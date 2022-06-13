import * as React from "react";
import Divider from "@mui/material/Divider";

export default function TitleDivider(props) {
  return <Divider sx={{ fontSize: 25 }}>{props.Title}</Divider>;
}

import * as React from "react";
import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import SignUpPopUp from "./SignUpPopUp";

export default function SignUpButton(props) {
  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <Dialog onClose={handleClose} open={props.open}>
      <SignUpPopUp signIn={props.signIn} signUp={props.setOpen}></SignUpPopUp>
    </Dialog>
  );
}

SignUpButton.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

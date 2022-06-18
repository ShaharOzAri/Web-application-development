import * as React from "react";
import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import SignInPopUp from "./SignInPopUp";

export default function SignInButton(props) {
  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <Dialog onClose={handleClose} open={props.open}>
      <SignInPopUp signUp={props.signUp} signIn={props.setOpen}></SignInPopUp>
    </Dialog>
  );
}

SignInButton.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

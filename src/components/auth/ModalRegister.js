import React from "react";

import Modal from "@material-ui/core/Modal";
import { Button } from "@material-ui/core";
import { useStyle } from "../layout/UseStyleLogin";

import RegisterForm from "./RegisterForm";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

function ModalRegister() {
  const classes = useStyle();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button className={classes.buttonRegister} onClick={handleOpen}>
        Create new account
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description">
        <RegisterForm getModalStyle={getModalStyle} />
      </Modal>
    </div>
  );
}
export default ModalRegister;

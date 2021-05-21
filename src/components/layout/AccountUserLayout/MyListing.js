import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useStyles } from "./UseStyleAccountPage";
import { AiFillFire } from "react-icons/ai";
// import { RiShareForwardFill } from "react-icons/ri";

import axios from "../../../config/axios";
import { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { useHistory } from "react-router-dom";
function MyListing({ products }) {
  const classes = useStyles();
  // /get-user-products/:userId
  const history = useHistory();
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpenDel = () => {
    setOpen(true);
  };
  const onDelete = async (id) => {
    console.log(id);
    try {
      const res = await axios.delete("/product/delete-product/" + id);
      if (res) {
        setOpen(false);

        return window.location.reload();
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Box className={classes.contentListing}>
        {products?.map((product, idx) => {
          return (
            <Paper className={classes.paperListing} key={product.id}>
              <Box className={classes.contentInmyList}>
                <img
                  src={product?.Photos[0]?.post}
                  alt="list"
                  width="150px"
                  height="150px"
                  style={{ borderRadius: 6 }}
                />
              </Box>
              <Box className={classes.contentInmyList}>
                <Typography className={classes.ListTitle}>
                  {product.title}
                </Typography>
                <Typography className={classes.ListPrice}>
                  {product.price} Baht
                </Typography>
                <Typography className={classes.ListStatus}>
                  In stock
                </Typography>
                <Box className={classes.flexButtonInlist}>
                  {/* <Button className={classes.buttonMark}>
                    Mark Out of Stock
                  </Button> */}
                  <Button
                    className={classes.buttonListing}
                    startIcon={<AiFillFire />}>
                    Boost Listing
                  </Button>

                  <Button
                    onClick={() =>
                      history.push("/editPage/" + product.id)
                    }
                    className={classes.buttonShare}
                    startIcon={<MdEdit />}>
                    Edit
                  </Button>
                  <Button
                    className={classes.buttonListingEdit}
                    startIcon={<MdDelete />}
                    onClick={() => handleOpenDel(product.id)}>
                    Delete
                  </Button>
                </Box>
              </Box>
              <Dialog
                open={open}
                onClose={handleClose}
                // PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title">
                <DialogTitle
                  style={{ cursor: "move" }}
                  id="draggable-dialog-title">
                  Do you want to Delete?
                </DialogTitle>
                <DialogContent>
                  {/* <DialogContentText></DialogContentText> */}
                </DialogContent>
                <DialogActions>
                  <Button
                    autoFocus
                    onClick={() => onDelete(product.id)}
                    color="primary">
                    Yes! Delete it.
                  </Button>
                  <Button onClick={handleClose} color="primary">
                    Cancel
                  </Button>
                </DialogActions>
              </Dialog>
            </Paper>
          );
        })}
      </Box>
    </>
  );
}

export default MyListing;

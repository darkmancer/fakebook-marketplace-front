import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Modal, TextField } from "@material-ui/core";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

const modalStyle = {
  top: `50%`,
  left: `50%`,
  transform: `translate(-50%, -50%)`,
};
const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: "#242526",
    border: "1px solid grey",
    borderRadius: 5,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    color: "white",
  },
  multilineColor: {
    color: "white",
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: grey,
  },
});

function FilterLocationModal(props) {
  const classes = useStyles();
  const { openPopup, setOpenPopup } = props;

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2>Filter Location</h2>

      <form autoComplete="off">
        <MuiThemeProvider theme={theme}>
          <TextField
            InputProps={{
              className: classes.multilineColor,
            }}
            className={classes.margin}
            fullWidth
            id="location"
            label="Location"
            variant="filled"
          />
        </MuiThemeProvider>
      </form>

      <p>img location from google map</p>
      <button onClick={() => setOpenPopup(false)}>close</button>
      <button onClick={() => alert("Apply")}>Apply</button>
    </div>
  );

  return (
    // <Dialog open={openPopup}>

    //     <DialogTitle>
    //       <div>Title this Filter will show here</div>
    //     </DialogTitle>
    //     <DialogContent>
    //       <div>Change location?</div>
    //     </DialogContent>

    // </Dialog>
    // <div className={classes.paper}>
    <Modal open={openPopup}>{body}</Modal>
    // </div>
  );
}
export default FilterLocationModal;

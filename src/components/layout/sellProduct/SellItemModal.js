import React, { useState } from "react";
import {
  Modal,
  TextField,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Radio,
  Box,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import { deepOrange, grey } from "@material-ui/core/colors";

const modalStyle = {
  top: `50%`,
  left: `50%`,
  transform: `translate(-50%, -50%)`,
};
const useStyles = makeStyles((theme) => ({
  paper: {
    position: "relative",
    width: 400,
    backgroundColor: "#242526",
    border: "1px solid grey",
    borderRadius: 5,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    color: "white",
    display: "flex",
    justifyContent: "center",
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
    secondary: deepOrange,
  },
});

function SellItemModal(props) {
  const classes = useStyles();
  const { openPopup, setOpenPopup } = props;
  const [value, setValue] = useState("female");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const body = (
    <MuiThemeProvider theme={theme}>
      <Box className={classes.paper} style={modalStyle}>
        <FormControl>
          <FormLabel>Label Chat</FormLabel>
          <RadioGroup
            aria-label="status"
            name="statusGroup"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value="pending"
              control={<Radio />}
              label="pending Payment"
            />
            <FormControlLabel value="paid" control={<Radio />} label="Paid" />
            <FormControlLabel
              value="toBeShipped"
              control={<Radio />}
              label="To be shipped"
            />
            <FormControlLabel
              value="toBeShipped"
              control={<Radio />}
              label="To be shipped"
            />
            <FormControlLabel
              value="shipped"
              control={<Radio />}
              label="Shipped"
            />
            <FormControlLabel
              value="cashOnDelivery"
              control={<Radio />}
              label="Cash On Delivery"
            />
            <FormControlLabel
              value="complete"
              control={<Radio />}
              label="Complete"
            />
          </RadioGroup>
          <Box>
            <Button variant="contained" color="primary">
              OK
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                setOpenPopup(false);
              }}
            >
              Clear
            </Button>
          </Box>
        </FormControl>
      </Box>
    </MuiThemeProvider>
  );

  return (
    <div className={classes.paper}>
      <Modal open={openPopup}>{body}</Modal>
    </div>
  );
}
export default SellItemModal;

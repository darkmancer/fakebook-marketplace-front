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
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

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
    justifyContent: "space-around",
    textAlign: "center",
  },
  multilineColor: {
    color: "white",
  },
  margin: {
    margin: theme.spacing(1),
  },
  sellPaper: {
    backgroundColor: "secondary",
    borderRadius: 5,
    width: 200,
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
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const [openLabel, setOpenLabel] = useState(false);
  const handleClick = (e) => {
    setOpenLabel(true);
  };

  const body = (
    <Box className={classes.paper} style={modalStyle}>
      <MuiThemeProvider theme={theme}>
        {" "}
        <FormControl>
          <FormLabel style={{ color: "white" }}>Label Chat</FormLabel>
          <RadioGroup
            aria-label="status"
            name="statusGroup"
            value={value}
            onChange={handleChange}>
            <FormControlLabel
              value="pending"
              control={<Radio />}
              label="pending Payment"
            />
            <FormControlLabel
              value="paid"
              control={<Radio />}
              label="Paid"
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
            <Button
              variant="contained"
              color="primary"
              className={classes.button}>
              OK
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={() => setOpenPopup(false)}>
              Clear
            </Button>
          </Box>
        </FormControl>
      </MuiThemeProvider>
    </Box>
  );

  return (
    <div>
      <Box>
        Sell Item <MoreHorizIcon onClick={alert("ok")} />
      </Box>

      <Modal open={openPopup}>{body}</Modal>
    </div>
  );
}
export default SellItemModal;

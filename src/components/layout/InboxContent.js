import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Paper,
  Tabs,
  Tab,
  Button,
  Box,
  Divider,
  MenuItem,
  FormControl,
  Select,
  Typography,
} from "@material-ui/core";
import RoomIcon from "@material-ui/icons/Room";
import "./Content.css";
import { Group } from "@material-ui/icons";
import SellItemModal from "./sellProduct/SellItemModal";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#18191A",
  },
  paper: {
    margin: theme.spacing(5),
    marginTop: theme.spacing(8),
    padding: theme.spacing(1),
    backgroundColor: "#242526",
    borderRadius: 5,
    justifyContent: "center",
  },
  Box: {
    height: 600,
    width: 800,
    padding: theme.spacing(2),
    borderRadius: 5,
    backgroundColor: "red",
  },
  dividerLine: {
    backgroundColor: "gray",
  },
  formControl: {
    margin: theme.spacing(0, 1, 1),
    minWidth: 120,
    // backgroundColor: "pink",
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
  fontColor: {
    color: "grey",
  },
  buttonColor: {
    backgroundColor: "grey",
    color: "white",
    borderRadius: 15,
    margin: theme.spacing(1),
  },
}));

function InboxContent() {
  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = React.useState("");
  const [showSell, setShowSell] = useState(false);
  const [showBuy, setShowBuy] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [list, setList] = React.useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleShowBuy = () => {
    setShowBuy(true);
    setShowSell(false);
  };
  const handleShowSell = () => {
    setShowSell(true);
    setShowBuy(false);
  };

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="stretch"
      height={100}>
      <Grid className={classes.root} style={{ minHeight: "100vh" }}>
        <Box className={classes.paper}>
          <Button color="primary" onClick={() => handleShowSell()}>
            Selling
          </Button>
          <Button color="primary" onClick={() => handleShowBuy()}>
            Buying
          </Button>
          {showSell && (
            <Box>
              <Divider className={classes.dividerLine} />
              <Box>
                <Typography
                  variant="body1"
                  className={classes.fontColor}>
                  {" "}
                  View Chats
                </Typography>

                <FormControl
                  variant="filled"
                  className={classes.formControl}>
                  <Select
                    value={value}
                    onChange={handleChange}
                    displayEmpty
                    className={classes.fontColor}

                    //inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value={"listing"}>
                      <em>Grouped by listing</em>
                    </MenuItem>
                    <MenuItem value={"chart"}>
                      Individual Charts
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>

              {value === "chart" ? (
                <>
                  <Divider className={classes.dividerLine} />
                  <Box>
                    <Typography
                      variant="body1"
                      className={classes.fontColor}>
                      {" "}
                      Filter by label
                    </Typography>

                    <Button className={classes.buttonColor}>
                      All
                    </Button>
                    <Button className={classes.buttonColor}>
                      Pending Payment
                    </Button>
                    <Button className={classes.buttonColor}>
                      Paid
                    </Button>
                    <Button className={classes.buttonColor}>
                      To Be shipped
                    </Button>
                    <Button className={classes.buttonColor}>
                      Shipped
                    </Button>
                    <Button className={classes.buttonColor}>
                      Cash on delivery
                    </Button>
                    <Button className={classes.buttonColor}>
                      Complete
                    </Button>
                  </Box>
                </>
              ) : (
                <>
                  <Divider className={classes.dividerLine} />
                  <Box>
                    <Typography
                      variant="body1"
                      className={classes.fontColor}
                      button
                      onClick={() => setOpenPopup(true)}>
                      ส่ง sell item ที่map
                      <SellItemModal
                        openPopup={openPopup}
                        setOpenPopup={setOpenPopup}
                      />
                    </Typography>
                  </Box>
                </>
              )}
            </Box>
          )}
          {showBuy && (
            <Box>
              <Button variant="body1" className={classes.buttonColor}>
                Seller's name: Product title
              </Button>
            </Box>
          )}
        </Box>
      </Grid>
    </Grid>
  );
}
export default InboxContent;

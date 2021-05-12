import React, { useState } from "react";
import { useHistory } from "react-router-dom";
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

import SellItemModal from "../SellItemModal/SellItemModal";
import MoreIcon from "@material-ui/icons/More";
import { useStyles } from "./StylesInboxContent";
import SellStep from "./SellStep";

function InboxContent() {
  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = React.useState("");
  const [showSell, setShowSell] = useState(false);
  const [showBuy, setShowBuy] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [showStep, setShowStep] = useState(false);
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
      height={100}
    >
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
                <Typography variant="body1" className={classes.fontColor}>
                  {" "}
                  View Chats
                </Typography>

                <FormControl variant="filled" className={classes.formControl}>
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
                    <MenuItem value={"chart"}>Individual Charts</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              {value === "chart" ? (
                <>
                  <Divider className={classes.dividerLine} />
                  <Box>
                    <Typography variant="body1" className={classes.fontColor}>
                      {" "}
                      Filter by label
                    </Typography>

                    <Button className={classes.buttonColor}>All</Button>
                    <Button className={classes.buttonColor}>
                      Pending Payment
                    </Button>
                    <Button className={classes.buttonColor}>Paid</Button>
                    <Button className={classes.buttonColor}>
                      To Be shipped
                    </Button>
                    <Button className={classes.buttonColor}>Shipped</Button>
                    <Button className={classes.buttonColor}>
                      Cash on delivery
                    </Button>
                    <Button className={classes.buttonColor}>Complete</Button>
                  </Box>
                </>
              ) : (
                <>
                  <Divider className={classes.dividerLine} />
                  <Box>
                    <Typography variant="body1" className={classes.fontColor}>
                      sell item ที่map
                      <MoreIcon button onClick={() => setOpenPopup(true)} />
                    </Typography>
                  </Box>
                </>
              )}
              <SellItemModal
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
              />
            </Box>
          )}
          {showBuy && (
            <Box>
              <Button
                variant="body1"
                className={classes.buttonColor}
                onClick={() => setShowStep(showStep === true ? false : true)}
              >
                Seller's name: Product title
              </Button>
              <Box>{showStep && <SellStep />}</Box>
            </Box>
          )}
        </Box>
      </Grid>
    </Grid>
  );
}
export default InboxContent;

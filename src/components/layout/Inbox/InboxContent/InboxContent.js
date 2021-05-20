import React, { useState, useEffect, useContext } from "react";
import axios from "../../../../config/axios";
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
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useStyles } from "./StylesInboxContent";
import SellStep from "./SellStep";
import MessageBox from "../../Messenger/MessageBox";
import SellItem from "./SellIem";
import { PayloadContext } from "../../../../context/PayloadContextProvider";

function InboxContent() {
  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = React.useState("");
  const [showSell, setShowSell] = useState(false);
  const [showBuy, setShowBuy] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [openChat, setOpenChat] = useState(false);
  const [showStep, setShowStep] = useState(false);
  const [seller, setSeller] = useState(null);
  const { payload, setPayload } = useContext(PayloadContext);
  const [talksUser, setTalksUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [list, setList] = React.useState("");
  console.log(talksUser);
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

  // useEffect(() => {
  //   const fetchSeller = async () => {
  //     try {
  //       const res = await axios.get(`/seller/${product.userId}`);
  //       // const res = await axios.get(`/seller/${id}`);

  //       setSeller(res.data.sellerProfile);
  //       setIsLoading(false);
  //     } catch (err) {
  //       console.log(`err`, err);
  //     }
  //   };
  //   const fetchIsSaved = async () => {
  //     const res = await axios.get(`/saved/isSaved/${product.id}`);
  //     setTriggerSaved(res.data.saved);
  //   };
  //   fetchSeller();
  //   fetchIsSaved();
  // }, [product]);

  const getTalk = async () => {
    //payload?.id= คนที่ติดเราเป็นทั้งคนติดต่อ ทั้ง เค้าติดต่อ
    try {
      const res = await axios.get(`/message/gettalk/${payload?.id}`);

      setTalksUser(res.data.talkUsers);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTalk();
  }, []);

  if (isLoading) return <p>Loading</p>;
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
                      <SellItem
                        seller={seller}
                        talksUser={talksUser}
                        setOpenPopup={setOpenPopup}
                        setOpenChat={setOpenChat}
                      />
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

      <MessageBox openChat={openChat} setOpenChat={setOpenChat} />
    </Grid>
  );
}
export default InboxContent;

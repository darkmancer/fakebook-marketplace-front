import React from "react";
import {
  Modal,
  TextField,
  Avatar,
  Divider,
  Typography,
  Button,
  Box,
} from "@material-ui/core";
import RoomIcon from "@material-ui/icons/Room";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

import { useStyles, modalStyle } from "./UseStyleCommerceProfileModal";

function CommerceProfileModal(props) {
  const classes = useStyles();
  const { openPopup, setOpenPopup } = props;

  const body = (
    <Box style={modalStyle} className={classes.paper}>
      <Box>
        <Box className={classes.closeButton}>
          <Box variant="h6" component="h2" flexGrow={1}>
            Commerce Profile
          </Box>
          <Box>
            {" "}
            <IconButton
              className={classes.button}
              IconButton
              onClick={() => setOpenPopup(false)}
            >
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>

      <Divider className={classes.dividerLine} />
      <Avatar
        className={classes.large}
        alt="name"
        src="https://res.cloudinary.com/dux0yt3qn/image/upload/v1620209841/GroupProject/nIEli5jE_400x400_yjuvb2.jpg"
      />

      <Typography variant="h6" component="h2">
        Name Chiba Chiba
      </Typography>
      <Box className={classes.buttonList}>
        <Button variant="contained" size="small" className={classes.button}>
          Follow
        </Button>
        <Button
          variant="contained"
          size="small"
          className={classes.button}
          onClick={() => alert("Apply")}
        >
          View Profile
        </Button>
        <Button
          variant="contained"
          size="small"
          className={classes.button}
          onClick={() => alert("Apply")}
        >
          Report
        </Button>
      </Box>
      <Divider className={classes.dividerLine} />
      <Typography variant="body2" component="span">
        Thing in common
      </Typography>
      <Typography variant="body2" component="span">
        <RoomIcon /> From Bangkok, Thailand
      </Typography>
      <Divider className={classes.dividerLine} />
      <Typography variant="body2" component="span">
        About
      </Typography>
      <Typography variant="body2" component="span">
        <HomeWorkIcon /> Lives in Bangkok, Thailand
      </Typography>
      <Typography variant="body2" component="span">
        <HowToRegIcon /> Joined FakebookMarketPlace in 2011
      </Typography>
      <Divider className={classes.dividerLine} />
      <Typography variant="body2" component="span">
        MarketPlace Listing
      </Typography>
    </Box>
  );

  return (
    <div className={classes.paper}>
      <Modal open={openPopup}>{body}</Modal>
    </div>
  );
}
export default CommerceProfileModal;

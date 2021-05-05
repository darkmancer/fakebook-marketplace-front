import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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
    padding: theme.spacing(1),
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  multilineColor: {
    color: "white",
  },
  margin: {
    margin: theme.spacing(1),
  },
  large: {
    margin: theme.spacing(1),
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  dividerLine: {
    backgroundColor: "#373A3B",
    width: 400,
  },
  buttonList: {
    display: "flex",
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: "#373A3B",
    color: "white",
  },
  closeButton: {
    display: "flex",
  },
}));

function CommerceProfileModal(props) {
  const classes = useStyles();
  const { openPopup, setOpenPopup } = props;

  const body = (
    <Box style={modalStyle} className={classes.paper}>
      <Box className={classes.closeButton}>
        <Box variant="h6" component="h2" justifyItems="space-between">
          Commerce Profile
          <IconButton
            className={classes.button}
            onClick={() => setOpenPopup(false)}
          >
            <CloseIcon />
          </IconButton>
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

import {
  Avatar,
  Box,
  Button,
  Collapse,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  TextField,
  Toolbar,
  Radio,
  RadioGroup,
  FormControlLabel,
  Modal,
} from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import React, { useContext } from "react";
import {
  MdAccessTime,
  MdAdd,
  MdBookmark,
  MdFilterNone,
  MdLayers,
  MdLocalOffer,
} from "react-icons/md";
import { useStyles } from "./UseStyleAccountPage";
import { RadioStatus, RadioSort } from "./RadioMap";
import { useHistory } from "react-router-dom";
import { AccountContext } from "../../../context/AccountContextProvider";
import CommenceProfileForm from "./CommenceProfileForm";

function DrawerMenuAccount() {
  function getModalStyle() {
    return {
      position: "absolute",
      top: "10%",
      left: "35%",
      overflow: "scroll",
      height: "100%",
      display: "block",
    };
  }

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  const history = useHistory();
  const [openColl, setOpenColl] = React.useState(false);
  const { setOpen, open } = useContext(AccountContext);
  const [openStatus, setOpenStatus] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState();
  const handleClick = () => {
    setOpenColl((prevOpen) => !prevOpen);
  };
  const handleClickStatus = () => {
    setOpenStatus((prevOpen) => !prevOpen);
  };
  const handleChangeRadio = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <Drawer
        // className={classes.root}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}>
        <Toolbar />
        <div className={classes.div}>
          <h2>Your Account</h2>
        </div>
        <Box className={classes.drawerContainer}>
          <div className={classes.drawerSpacing}>
            <List>
              <ListItem
                className={classes.buttonListAccount}
                onClick={() => history.push("/mypage")}>
                <ListItemIcon
                  className={classes.ListIcon}
                  onClick={() => history.push}>
                  <MdLocalOffer />
                </ListItemIcon>
                Your Listings
              </ListItem>
            </List>
            <List>
              <ListItem
                className={classes.buttonListAccount}
                onClick={() => history.push("/mypage/saved")}>
                <ListItemIcon className={classes.ListIcon}>
                  <MdBookmark />
                </ListItemIcon>
                Saved
              </ListItem>
            </List>
            <List>
              <ListItem
                className={classes.buttonListAccount}
                onClick={() => history.push("/mypage/following")}>
                <ListItemIcon className={classes.ListIcon}>
                  <MdLayers />
                </ListItemIcon>
                Following
              </ListItem>
            </List>
            <List>
              <ListItem
                className={classes.buttonListAccount}
                onClick={() => alert("Recent Activity")}>
                <ListItemIcon className={classes.ListIcon}>
                  <MdAccessTime />
                </ListItemIcon>
                Recent Activity
              </ListItem>
            </List>
            <List>
              <ListItem
                button
                onClick={() => setOpen(true)}
                className={classes.buttonListAccount}>
                <Avatar
                  style={{ marginRight: 10 }}
                  alt="name"
                  className={classes.AvatarProfile}
                  src="https://res.cloudinary.com/dux0yt3qn/image/upload/v1620211563/GroupProject/EZT-c_SUEAQVwX8_oxti1w.jpg"
                />
                Commence Profile
              </ListItem>
            </List>
          </div>

          <List>
            <Button
              className={classes.buttonCreateNewList}
              onClick={() => history.push("/mylistings")}>
              <MdAdd style={{ marginRight: "10px" }} />
              Create New Listing
            </Button>
            <Button className={classes.buttonManageList}>
              Manage Listings
            </Button>
          </List>

          <Divider className={classes.divider} />
          <div className={classes.drawerSpacing}>
            <List>
              <Grid container>
                <ListItem className={classes.buttonListFilter}>
                  Filters
                </ListItem>
              </Grid>
              <ListItem
                className={classes.buttonListAccount}
                onClick={handleClick}>
                <ListItemText primary="Sort by" />
                {openColl ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={openColl} timeout="auto">
                <List component="div" disablePadding>
                  <RadioGroup>
                    {RadioSort.map((radio, idx) => {
                      return (
                        <ListItem key={idx}>
                          <ListItemText primary={radio.primary} />
                          <ListItemSecondaryAction>
                            <Radio
                              className={classes.RadioCheck}
                              checked={
                                selectedValue === radio.primary
                              }
                              value={radio.primary}
                              onChange={handleChangeRadio}
                            />
                          </ListItemSecondaryAction>
                        </ListItem>
                      );
                    })}
                  </RadioGroup>
                </List>
              </Collapse>
              {/* //Status */}
              <ListItem
                className={classes.buttonListAccount}
                onClick={handleClickStatus}>
                <ListItemText primary="Status" />
                {openStatus ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={openStatus} timeout="auto">
                <List component="div" disablePadding>
                  <RadioGroup>
                    {RadioStatus.map((radio, idx) => {
                      return (
                        <ListItem key={idx}>
                          <ListItemText primary={radio.primary} />
                          <ListItemSecondaryAction>
                            <Radio
                              className={classes.RadioCheck}
                              checked={
                                selectedValue === radio.primary
                              }
                              value={radio.primary}
                              onChange={handleChangeRadio}
                            />
                          </ListItemSecondaryAction>
                        </ListItem>
                      );
                    })}
                  </RadioGroup>
                </List>
              </Collapse>
            </List>
          </div>
        </Box>
      </Drawer>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="title"
        aria-describedby="description">
        <CommenceProfileForm getModalStyle={getModalStyle} />
      </Modal>
    </>
  );
}

export default DrawerMenuAccount;

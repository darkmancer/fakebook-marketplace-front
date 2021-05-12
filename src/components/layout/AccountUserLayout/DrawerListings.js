import {
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Toolbar,
} from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { MdHelp, MdLocalOffer, MdLoyalty } from "react-icons/md";
import { useHistory } from "react-router-dom";

import { useStyles } from "./UseStyleAccountPage";

function DrawerListings() {
  const classes = useStyles();
  const history = useHistory();
  const [onClicked, setOnClicked] = useState(false);
  const handleOnClicked = () => {
    setOnClicked((prevonClicked) => !prevonClicked);
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
          <h2>Create New Listing</h2>
        </div>
        <Box className={classes.drawerContainer}>
          <div className={classes.drawerSpacing}>
            <List>
              <ListItem
                button
                className={
                  onClicked
                    ? classes.buttonListings
                    : classes.buttonListingsClicked
                }
                onClick={handleOnClicked}>
                <ListItemIcon className={classes.ListIcon}>
                  <MdLocalOffer />
                </ListItemIcon>
                Choose Listing type
              </ListItem>
            </List>

            <Divider className={classes.divider} />
            <List>
              <ListItem
                className={classes.buttonListAccount}
                onClick={() => history.push("/mypage")}>
                <ListItemIcon className={classes.ListIcon}>
                  <MdLoyalty />
                </ListItemIcon>
                <ListItemText primary="Your Listings" />
                <ListItemSecondaryAction>
                  1 active
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem
                className={classes.buttonListAccount}
                onClick={() => alert("Help yourself Bitch!")}>
                <ListItemIcon className={classes.ListIcon}>
                  <MdHelp />
                </ListItemIcon>
                <ListItemText primary="Help" />
              </ListItem>
            </List>
          </div>
        </Box>
      </Drawer>
    </>
  );
}

export default DrawerListings;

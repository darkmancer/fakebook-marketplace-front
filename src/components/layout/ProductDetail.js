import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MessageIcon from "@material-ui/icons/Message";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import ShareIcon from "@material-ui/icons/Share";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import HomeIcon from "@material-ui/icons/Home";
import InboxIcon from "@material-ui/icons/Inbox";
import PersonIcon from "@material-ui/icons/Person";
import AddIcon from "@material-ui/icons/Add";
import {
  AppBar,
  Toolbar,
  Avatar,
  Box,
  Typography,
  Button,
} from "@material-ui/core";

//const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    color: "white",
  },
  drawer: {
    width: 500,
    flexShrink: 1,
  },
  drawerPaper: {
    width: 500,
    backgroundColor: "#242526",
    color: "white",
    borderColor: "gray",
    right: 0,
    left: "auto",
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  dividerLine: {
    backgroundColor: "gray",
  },
  button: {
    margin: theme.spacing(1),
  },
  buttonList: {
    display: "flex",
  },
  buttonSave: {
    margin: theme.spacing(1),
    marginLeft: theme.spacing(3),
  },
}));

function ProductDetail() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [openPopup, setOpenPopup] = useState(false);
  return (
    <>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem>Product Title</ListItem>
          </List>

          <List>
            <ListItem>Price</ListItem>
            <ListItem>Type</ListItem>
          </List>

          <Box className={classes.buttonList}>
            <Box flexGrow={1}>
              <Button
                fullWidth
                variant="contained"
                color="default"
                className={classes.button}
                startIcon={<MessageIcon />}
              >
                Message
              </Button>
            </Box>
            <Box>
              <Button
                variant="contained"
                color="default"
                className={classes.buttonSave}
                startIcon={<BookmarkIcon />}
              >
                save
              </Button>
            </Box>

            <Box>
              <Button
                variant="contained"
                color="default"
                className={classes.button}
                startIcon={<ShareIcon />}
              >
                share
              </Button>
            </Box>
          </Box>
          <Divider className={classes.dividerLine} />
          <List>
            <ListItem>Description</ListItem>
            <ListItem>Location</ListItem>
          </List>
          <Divider className={classes.dividerLine} />
          <List>
            <ListItem>Seller Information</ListItem>
            <ListItem>Seller Avatar</ListItem>
          </List>
        </div>
      </Drawer>
    </>
  );
}
export default ProductDetail;

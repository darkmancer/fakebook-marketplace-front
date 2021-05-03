import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import SearchIcon from "@material-ui/icons/Search";
import "./SideBar.css";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "black",
    color: "white",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    color: "white",
    backgroundColor: "black",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function SideBar() {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            MarketPlace
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        // className="sidebar-container"
        className={classes.drawer}
        variant="permanent"
        // classes={{
        //   paper: classes.drawerPaper,
        // }}
      >
        <Toolbar />
        <div /* className={classes.drawerContainer}*/>
          <List>
            <ListItem>
              <ListItemIcon>Browse All</ListItemIcon>
            </ListItem>

            <ListItem>
              <ListItemIcon>Inbox</ListItemIcon>
            </ListItem>

            <ListItem>
              <ListItemIcon>Your Account</ListItemIcon>
            </ListItem>
            <ListItem>Create New Listing</ListItem>
          </List>

          <Divider />

          <List>
            <ListItem>Filters</ListItem>
            <ListItem>bangkok, Thailand within 60 km</ListItem>
          </List>

          <Divider />

          <List>
            <ListItem>Categories</ListItem>
            <ListItem>vehicles</ListItem>
          </List>
        </div>
      </Drawer>
    </>
  );
}
export default SideBar;

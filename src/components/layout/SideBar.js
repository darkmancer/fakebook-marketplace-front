import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  Toolbar,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  Box,
  TextField,
} from "@material-ui/core";

import HomeIcon from "@material-ui/icons/Home";
import InboxIcon from "@material-ui/icons/Inbox";
import PersonIcon from "@material-ui/icons/Person";
import AddIcon from "@material-ui/icons/Add";
import Header from "./Header";
import FilterLocationModal from "./FilterLocationModal";
import SearchIcon from "@material-ui/icons/Search";
import Content from "./Content";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    color: "white",
  },

  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#252426",
    color: "white",
    borderColor: "grey",
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  dividerLine: {
    backgroundColor: "grey",
  },
  searchInput: {
    margin: theme.spacing(1),
    width: "25ch",
    backgroundColor: "#3A3B3C",
    borderRadius: 20,
    color: "white",
  },
}));

function SideBar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const history = useHistory();
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
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <Box className={classes.drawerContainer}>
          <List>
            <form className={classes.searchInput}>
              <TextField label="Search Market Place" variant="outlined" />
            </form>

            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
                Browse All
              </ListItemIcon>
            </ListItem>

            <ListItem button onClick={() => history.push("/inbox")}>
              <ListItemIcon>
                <InboxIcon />
                Inbox
              </ListItemIcon>
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <PersonIcon />
                Your Account
              </ListItemIcon>
            </ListItem>

            <Divider className={classes.dividerLine} />

            <ListItem button onClick={() => alert("ok")}>
              <AddIcon />
              Create New Listing
            </ListItem>
          </List>

          <Divider className={classes.dividerLine} />

          <List>
            <ListItem>Filters</ListItem>
            <ListItem button onClick={() => setOpenPopup(true)}>
              bangkok, Thailand within 60 km
            </ListItem>
          </List>

          <Divider className={classes.dividerLine} />

          <List>
            <ListItem>Categories</ListItem>
            <ListItem button onClick={() => history.push("/vehicle")}>
              vehicles
            </ListItem>
            <ListItem button>Property Rentals</ListItem>
            <ListItem button>Goods</ListItem>
          </List>
        </Box>
      </Drawer>

      <FilterLocationModal openPopup={openPopup} setOpenPopup={setOpenPopup} />
    </>
  );
}
export default SideBar;

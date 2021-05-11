import React, { useState } from "react";
import { useHistory } from "react-router-dom";
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
import FilterLocationModal from "./FilterLocationModal";
import { useStylesSideBar } from "./UseStyleSideBar";

function SideBar() {
  const classes = useStylesSideBar();
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

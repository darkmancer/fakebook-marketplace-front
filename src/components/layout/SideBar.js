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

            <ListItem
              button
              className={classes.root}
              onClick={() => {
                history.push("/HomePage");
              }}
            >
              <HomeIcon />
              Browse All
            </ListItem>

            <ListItem
              button
              className={classes.root}
              onClick={() => history.push("/inbox")}
            >
              <InboxIcon />
              Inbox
            </ListItem>

            <ListItem
              button
              className={classes.root}
              onClick={() => history.push("/mypage")}
            >
              <PersonIcon />
              Your Account
            </ListItem>

            <Divider className={classes.dividerLine} />

            <ListItem
              button
              className={classes.root}
              onClick={() => alert("ok")}
            >
              <AddIcon />
              Create New Listing
            </ListItem>
          </List>

          <Divider className={classes.dividerLine} />

          <List>
            <ListItem>Filters</ListItem>
            <ListItem
              button
              className={classes.root}
              onClick={() => setOpenPopup(true)}
            >
              bangkok, Thailand within 60 km
            </ListItem>
          </List>

          <Divider className={classes.dividerLine} />

          <List>
            <ListItem>Categories</ListItem>
            <ListItem
              button
              className={classes.root}
              onClick={() => history.push("/category/vehicle")}
            >
              vehicles
            </ListItem>
            <ListItem
              button
              className={classes.root}
              onClick={() => history.push("/category/home")}
            >
              Property Rentals,Home
            </ListItem>
            <ListItem
              button
              className={classes.root}
              onClick={() => history.push("/category/goods")}
            >
              Goods
            </ListItem>
          </List>
        </Box>
      </Drawer>

      <FilterLocationModal openPopup={openPopup} setOpenPopup={setOpenPopup} />
    </>
  );
}
export default SideBar;

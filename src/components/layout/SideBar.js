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
  Input,
} from "@material-ui/core";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import StorefrontIcon from "@material-ui/icons/Storefront";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import InboxIcon from "@material-ui/icons/Inbox";
import PersonIcon from "@material-ui/icons/Person";
import AddIcon from "@material-ui/icons/Add";
import FilterLocationModal from "./FilterLocationModal";
import { useStylesSideBar } from "./UseStyleSideBar";
import { MdSearch } from "react-icons/md";

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
            <form>
              <TextField
                placeholder="Search Market Place"
                InputProps={{
                  startAdornment: (
                    <MdSearch size="30" className={classes.iconSearch} />
                  ),
                  disableUnderline: true,
                  className: classes.searchInput,
                }}
              />
            </form>

            <ListItem
              button
              className={classes.root}
              onClick={() => {
                history.push("/HomePage");
              }}
            >
              <StorefrontIcon />
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
              className={classes.createList}
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
              onClick={() => history.push("/category/VEHICLE")}
            >
              <DriveEtaIcon /> vehicles
            </ListItem>
            <ListItem
              button
              className={classes.root}
              onClick={() => history.push("/category/HOME")}
            >
              <HomeWorkIcon />
              Property Rentals,Home
            </ListItem>
            <ListItem
              button
              className={classes.root}
              onClick={() => history.push("/category/ITEM")}
            >
              <LoyaltyIcon />
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

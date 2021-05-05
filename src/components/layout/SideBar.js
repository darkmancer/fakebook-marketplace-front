import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import HomeIcon from "@material-ui/icons/Home";
import InboxIcon from "@material-ui/icons/Inbox";
import PersonIcon from "@material-ui/icons/Person";
import AddIcon from "@material-ui/icons/Add";
import Header from "./Header";
import FilterLocationModal from "./FilterLocationModal";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    color: "white",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#242526",
    color: "white",
    borderColor: "gray",
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
}));

function SideBar() {
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
      <Header />

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
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
                Browse All
              </ListItemIcon>
            </ListItem>

            <ListItem button>
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
            <ListItem button>vehicles</ListItem>
          </List>
        </div>
      </Drawer>
      <FilterLocationModal openPopup={openPopup} setOpenPopup={setOpenPopup} />
    </>
  );
}
export default SideBar;

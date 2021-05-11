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
  ListItemText,
  TextField,
  Toolbar,
} from "@material-ui/core";
import React from "react";
import {
  MdAccessTime,
  MdAdd,
  MdBookmark,
  MdFilterNone,
  MdLocalOffer,
} from "react-icons/md";
import { useStyles } from "./UseStyleAccountPage";
function DrawerMenuAccount() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
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
                onClick={() => alert("Listings")}>
                <ListItemIcon className={classes.ListIcon}>
                  <MdLocalOffer />
                </ListItemIcon>
                Your Listing
              </ListItem>
            </List>
            <List>
              <ListItem
                className={classes.buttonListAccount}
                onClick={() => alert("Save")}>
                <ListItemIcon className={classes.ListIcon}>
                  <MdBookmark />
                </ListItemIcon>
                Save
              </ListItem>
            </List>
            <List>
              <ListItem
                className={classes.buttonListAccount}
                onClick={() => alert("Following")}>
                <ListItemIcon className={classes.ListIcon}>
                  <MdFilterNone />
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
                className={classes.buttonListAccount}
                onClick={() => alert("Save")}>
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
            <Button className={classes.buttonCreateNewList}>
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
              <Collapse>
                <ListItem className={classes.buttonListAccount}>
                  Sort by
                </ListItem>
                <List component="div" disablePadding>
                  <ListItem button className={classes.nested}>
                    <ListItemText primary="Starred" />
                  </ListItem>
                </List>
              </Collapse>

              <ListItem className={classes.buttonListAccount}>
                Status
              </ListItem>
            </List>
          </div>
        </Box>
      </Drawer>
    </>
  );
}

export default DrawerMenuAccount;

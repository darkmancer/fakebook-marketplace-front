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
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";

import HomeIcon from "@material-ui/icons/Home";
import InboxIcon from "@material-ui/icons/Inbox";
import PersonIcon from "@material-ui/icons/Person";
import AddIcon from "@material-ui/icons/Add";
import Header from "../Header";

import SearchIcon from "@material-ui/icons/Search";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    color: "white",
  },
  drawer: {
    width: drawerWidth,
    backgroundColor: "red",
    flexShrink: 0,
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

function CategoriesSideBar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [sortBy, setSortBy] = useState("");
  const history = useHistory();
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (event) => {
    setSortBy(event.target.value);
  };

  const [openPopup, setOpenPopup] = useState(false);
  return (
    <>
      <Header />

      <Drawer
        // className={classes.root}
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
          <List>
            <FormControl className={classes.searchInput}>
              <InputLabel id="sort">Sort by</InputLabel>
              <Select
                labelId="sort"
                id="sort-select-filled"
                value={sortBy}
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"lowPrice"}>Price: Lowest first</MenuItem>
                <MenuItem value={"highPrice"}>Price: Highest first</MenuItem>
                <MenuItem value={"newDate"}>Date: Newest first</MenuItem>
                <MenuItem value={"oldDate"}>Date: Oldest first</MenuItem>
                <MenuItem value={"nearDistance"}>
                  Distance: Nearest first
                </MenuItem>
                <MenuItem value={"farDistance"}>
                  Distance:Farthest first
                </MenuItem>
              </Select>
            </FormControl>

            <ListItem>Price</ListItem>
            <form className={classes.searchInput}>
              <TextField label="price" variant="outlined" />{" "}
            </form>
            <ListItem>to</ListItem>
            <form className={classes.searchInput}>
              <TextField label="price" variant="outlined" />{" "}
            </form>
          </List>

          <Divider className={classes.dividerLine} />

          <List>
            <ListItem>Categories</ListItem>
            <ListItem button>vehicles</ListItem>
            <ListItem button>Property Rentals</ListItem>
            <ListItem button>Goods</ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}
export default CategoriesSideBar;

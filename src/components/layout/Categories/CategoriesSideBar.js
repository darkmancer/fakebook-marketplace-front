import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Drawer,
  Toolbar,
  List,
  Divider,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Box,
  TextField,
  FormControl,
  Collapse,
  Radio,
  RadioGroup,
  Input,
} from "@material-ui/core";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import StorefrontIcon from "@material-ui/icons/Storefront";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import AddIcon from "@material-ui/icons/Add";
import Header from "../Header";
import { useStyles } from "./StyleCatSideBar";
import FilterLocationModal from "../FilterLocationModal";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import { RadioCondition, RadioSort } from "../AccountUserLayout/RadioMap";
import { MdSearch } from "react-icons/md";
function CategoriesSideBar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [openCondition, setOpenCondition] = React.useState(false);
  const [sortBy, setSortBy] = useState("");
  const [selectedValue, setSelectedValue] = React.useState();
  const history = useHistory();
  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleClickCondition = () => {
    setOpenCondition((prevOpen) => !prevOpen);
  };

  const handleChangeRadio = (event) => {
    setSelectedValue(event.target.value);
  };
  const handleChange = (event) => {
    setSortBy(event.target.value);
  };
  console.log(selectedValue);
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
            </form>{" "}
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
          <List>
            <ListItem
              button
              className={classes.buttonListAccount}
              onClick={handleClick}
            >
              <ListItemText primary="Sort by" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto">
              <List component="div" disablePadding>
                <RadioGroup>
                  {RadioSort.map((radio, idx) => {
                    return (
                      <ListItem key={idx}>
                        <ListItemText primary={radio.primary} />
                        <ListItemSecondaryAction>
                          <Radio
                            className={classes.RadioCheck}
                            checked={selectedValue === radio.primary}
                            value={radio.primary}
                            onChange={handleChangeRadio}
                          />
                        </ListItemSecondaryAction>
                      </ListItem>
                    );
                  })}
                </RadioGroup>
              </List>
            </Collapse>
            {/* item condition Not show in Vehicle page*/}
            <ListItem
              button
              className={classes.buttonListAccount}
              onClick={handleClickCondition}
            >
              <ListItemText primary="Item Condition" />
              {openCondition ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openCondition} timeout="auto">
              <List component="div" disablePadding>
                <RadioGroup>
                  {RadioCondition.map((radio, idx) => {
                    return (
                      <ListItem key={idx}>
                        <ListItemText primary={radio.primary} />
                        <ListItemSecondaryAction>
                          <Radio
                            className={classes.RadioCheck}
                            checked={selectedValue === radio.primary}
                            value={radio.primary}
                            onChange={handleChangeRadio}
                          />
                        </ListItemSecondaryAction>
                      </ListItem>
                    );
                  })}
                </RadioGroup>
              </List>
            </Collapse>
            <ListItem>Price</ListItem>
            <Box className={classes.priceMinMax}>
              <Box>
                <TextField
                  placeholder="min"
                  InputProps={{
                    disableUnderline: true,
                    className: classes.searchPrice,
                  }}
                />
              </Box>
              <Box>
                <ListItem>to</ListItem>
              </Box>
              <Box>
                <TextField
                  placeholder="max"
                  InputProps={{
                    disableUnderline: true,
                    className: classes.searchPrice,
                  }}
                />
              </Box>
            </Box>
          </List>

          <Divider className={classes.dividerLine} />

          <List>
            <ListItem>Categories</ListItem>
            <ListItem
              button
              className={classes.root}
              onClick={() => history.push("/category/vehicle")}
            >
              <DriveEtaIcon /> vehicles
            </ListItem>
            <ListItem
              button
              className={classes.root}
              onClick={() => history.push("/category/home")}
            >
              <HomeWorkIcon /> Property Rentals,Home
            </ListItem>
            <ListItem
              button
              className={classes.root}
              onClick={() => history.push("/category/goods")}
            >
              <LoyaltyIcon />
              Goods
            </ListItem>
          </List>
        </Box>
        <FilterLocationModal
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
        />
      </Drawer>
    </>
  );
}
export default CategoriesSideBar;

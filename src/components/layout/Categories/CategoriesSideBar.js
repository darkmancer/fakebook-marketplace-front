import React, { useState, useContext } from "react";
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
  Typography,
} from "@material-ui/core";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import HomeIcon from "@material-ui/icons/Home";
import WatchIcon from "@material-ui/icons/Watch";
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
import { PriceContext } from "../../../context/PriceContextProvider";
import DevicesIcon from "@material-ui/icons/Devices";
import BuildIcon from "@material-ui/icons/Build";

function CategoriesSideBar() {
  const classes = useStyles();
  const { priceMin, setPriceMin, priceMax, setPriceMax, condition, setCondition, search, setSearch } =
    useContext(PriceContext);
  const [open, setOpen] = React.useState(false);
  const [openCondition, setOpenCondition] = React.useState(false);
  const [sortBy, setSortBy] = useState("");

  const history = useHistory();
  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleClickCondition = () => {
    setOpenCondition((prevOpen) => !prevOpen);
  };

  const handleChangeCondition = (event) => {
    setCondition(event.target.value)
  };
  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const handleSortBy = (event) => {

  };
  const handleChangeMin = (event) => {
    setPriceMin(event.target.value);
  };
  const handleChangeMax = (event) => {
    setPriceMax(event.target.value);
  };
  console.log(priceMin, priceMax);
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
                onChange={handleSearch}
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
                          
                            value={radio.primary}
                            onChange={handleSortBy}
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
                            checked={condition === radio.primary}
                            value={radio.primary}
                            onChange={handleChangeCondition}
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
                  onChange={handleChangeMin}
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
                  onChange={handleChangeMax}
                />
              </Box>
            </Box>
          </List>

          <Divider className={classes.dividerLine} />

          <List>
            <ListItem>
              {" "}
              <Typography
                variant="h5"
                component="h6"
                style={{ marginLeft: "1rem" }}
              >
                Categories
              </Typography>
            </ListItem>
            <ListItem
              button
              className={classes.root}
              onClick={() => history.push("/category/vehicle")}
            >
              <DriveEtaIcon />
              <Typography
                variant="h6"
                component="h6"
                style={{ marginLeft: "1rem" }}
              >
                Vehicle
              </Typography>
            </ListItem>
            <ListItem
              button
              className={classes.root}
              onClick={() => history.push("/category/Property-Rentals")}
            >
              <HomeWorkIcon />
              <Typography
                variant="h6"
                component="h6"
                style={{ marginLeft: "1rem" }}
              >
                Property Rentals
              </Typography>
            </ListItem>
            <ListItem
              button
              className={classes.root}
              onClick={() => history.push("/category/ITEM")}
            >
              <LoyaltyIcon />
              <Typography
                variant="h6"
                component="h6"
                style={{ marginLeft: "1rem" }}
              >
                Goods
              </Typography>
            </ListItem>
            <ListItem
              button
              className={classes.root}
              onClick={() => history.push("/category/Electronics")}
            >
              <DevicesIcon />
              <Typography
                variant="h6"
                component="h6"
                style={{ marginLeft: "1rem" }}
              >
                Electronics
              </Typography>
            </ListItem>
            <ListItem
              button
              className={classes.root}
              onClick={() => history.push("/category/Clothing-&-Accessories")}
            >
              <WatchIcon />
              <Typography
                variant="h6"
                component="h6"
                style={{ marginLeft: "1rem" }}
              >
                Apparel
              </Typography>
            </ListItem>
            <ListItem
              button
              className={classes.root}
              onClick={() => history.push("/category/Home-Sales")}
            >
              <HomeIcon />
              <Typography
                variant="h6"
                component="h6"
                style={{ marginLeft: "1rem" }}
              >
                Home Sales
              </Typography>
            </ListItem>
            <ListItem
              button
              className={classes.root}
              onClick={() => history.push("/category/Family")}
            >
              <InsertEmoticonIcon />
              <Typography
                variant="h6"
                component="h6"
                style={{ marginLeft: "1rem" }}
              >
                Family
              </Typography>
            </ListItem>
            <ListItem
              button
              className={classes.root}
              onClick={() => history.push("/category/Free-Stuff")}
            >
              <LoyaltyIcon />
              <Typography
                variant="h6"
                component="h6"
                style={{ marginLeft: "1rem" }}
              >
                Free Stuff
              </Typography>
            </ListItem>
            <ListItem
              button
              className={classes.root}
              onClick={() => history.push("/category/Garden-&-Outdoor")}
            >
              <BuildIcon />
              <Typography
                variant="h6"
                component="h6"
                style={{ marginLeft: "1rem" }}
              >
                Garden &amp; Outdoor
              </Typography>
            </ListItem>
            <ListItem
              button
              className={classes.root}
              onClick={() => history.push("/category/Hobbies")}
            >
              <DevicesIcon />
              <Typography
                variant="h6"
                component="h6"
                style={{ marginLeft: "1rem" }}
              >
                Hobbies
              </Typography>
            </ListItem>
            <ListItem
              button
              className={classes.root}
              onClick={() => history.push("/category/Home-Goods")}
            >
              <DevicesIcon />
              <Typography
                variant="h6"
                component="h6"
                style={{ marginLeft: "1rem" }}
              >
                Home Goods
              </Typography>
            </ListItem>
            <ListItem
              button
              className={classes.root}
              onClick={() =>
                history.push("/category/Home-Improvement-Supplies")
              }
            >
              <BuildIcon />
              <Typography
                variant="h6"
                component="h6"
                style={{ marginLeft: "1rem" }}
              >
                Home Improvement Supplies
              </Typography>
            </ListItem>
            <ListItem
              button
              className={classes.root}
              onClick={() => history.push("/category/Musical-Instruments")}
            >
              <DevicesIcon />
              <Typography
                variant="h6"
                component="h6"
                style={{ marginLeft: "1rem" }}
              >
                Musical Instruments
              </Typography>
            </ListItem>
            <ListItem
              button
              className={classes.root}
              onClick={() => history.push("/category/Office-Supplies")}
            >
              <DevicesIcon />
              <Typography
                variant="h6"
                component="h6"
                style={{ marginLeft: "1rem" }}
              >
                Office Supplies
              </Typography>
            </ListItem>
            <ListItem
              button
              className={classes.root}
              onClick={() => history.push("/category/Pet-Supplies")}
            >
              <DevicesIcon />
              <Typography
                variant="h6"
                component="h6"
                style={{ marginLeft: "1rem" }}
              >
                Pet Supplies
              </Typography>
            </ListItem>
            <ListItem
              button
              className={classes.root}
              onClick={() => history.push("/category/Sporting-Goods")}
            >
              <DevicesIcon />
              <Typography
                variant="h6"
                component="h6"
                style={{ marginLeft: "1rem" }}
              >
                Sporting Goods
              </Typography>
            </ListItem>
            <ListItem
              button
              className={classes.root}
              onClick={() => history.push("/category/Toys-&-Games")}
            >
              <DevicesIcon />
              <Typography
                variant="h6"
                component="h6"
                style={{ marginLeft: "1rem" }}
              >
                Toys &amp; Games
              </Typography>
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

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


function CategoriesSideBar() {
  const classes = useStyles();
  const { priceMin, setPriceMin, priceMax, setPriceMax } =
    useContext(PriceContext);
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
              onClick={() => history.push("/category/VEHICLE")}
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
              onClick={() => history.push("/category/HOME")}
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
              onClick={() => history.push("/category/ITEM")}
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
              onClick={() => history.push("/category/ITEM")}
            >
              <DevicesIcon />
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
              onClick={() => history.push("/category/ITEM")}
            >
              <DevicesIcon />
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
              onClick={() => history.push("/category/ITEM")}
            >
              <DevicesIcon />
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
              onClick={() => history.push("/category/ITEM")}
            >
              <DevicesIcon />
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
              onClick={() => history.push("/category/ITEM")}
            >
              <DevicesIcon />
              <Typography
                variant="h6"
                component="h6"
                style={{ marginLeft: "1rem" }}
              >
                Garden &nvsp; Outdoor
              </Typography>
            </ListItem>
            <ListItem
              button
              className={classes.root}
              onClick={() => history.push("/category/ITEM")}
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
              onClick={() => history.push("/category/ITEM")}
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
              onClick={() => history.push("/category/ITEM")}
            >
              <DevicesIcon />
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
              onClick={() => history.push("/category/ITEM")}
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
              onClick={() => history.push("/category/ITEM")}
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
              onClick={() => history.push("/category/ITEM")}
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
              onClick={() => history.push("/category/ITEM")}
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
              onClick={() => history.push("/category/ITEM")}
            >
              <DevicesIcon />
              <Typography
                variant="h6"
                component="h6"
                style={{ marginLeft: "1rem" }}
              >
                Toys &nsp; Games
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

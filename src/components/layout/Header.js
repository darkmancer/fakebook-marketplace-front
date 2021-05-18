import React from "react";
import { useHistory } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Avatar,
  Box,
  Typography,
  Image,
  Link,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { useStylesHeader } from "./UseStyleHeader";
import * as localStorage from "../../services/localStorageService";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContextProvider";

function Header(props) {
  const { palette } = props;
  const classes = useStylesHeader(palette);
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { setIsAuthenticated } = useContext(AuthContext);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = async (e) => {
    e.preventDefault();
    localStorage.clearAll();
    await setIsAuthenticated(false);
    //setAuth({});
    // role === "admin" ? setIsAdmin(false) : setIsAuthenticated(false);
    history.push("/login");
  };

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Box flexGrow={1}>
          <Typography
            className={classes.root}
            onClick={() => history.push("/Homepage")}>
            Market Place
          </Typography>
        </Box>
        <Avatar
          className={classes.root}
          alt="name"
          onClick={handleClick}
          src="https://res.cloudinary.com/dux0yt3qn/image/upload/v1620211563/GroupProject/EZT-c_SUEAQVwX8_oxti1w.jpg"
        />
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Edit account</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
        Chiwawa
      </Toolbar>
    </AppBar>
  );
}
export default Header;

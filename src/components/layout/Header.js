import React from "react";
import { useHistory } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Avatar,
  Box,
  Typography,
  Image,
} from "@material-ui/core";
import { useStylesHeader } from "./UseStyleHeader";

function Header(props) {
  const { palette } = props;
  const classes = useStylesHeader(palette);
  const history = useHistory();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Box flexGrow={1}>
          <Typography
            className={classes.root}
            onClick={() => history.push("/")}
          >
            Market Place
          </Typography>
        </Box>
        <Avatar
          className={classes.root}
          alt="name"
          src="https://res.cloudinary.com/dux0yt3qn/image/upload/v1620211563/GroupProject/EZT-c_SUEAQVwX8_oxti1w.jpg"
        />
        Chiwawa
      </Toolbar>
    </AppBar>
  );
}
export default Header;

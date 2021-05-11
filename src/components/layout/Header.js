import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Avatar,
  Box,
  Typography,
  Image,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "#242526",
  },
}));

function Header(props) {
  const { palette } = props;
  const classes = useStyles(palette);
  const history = useHistory();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Box flexGrow={1}>
          <Typography onClick={() => history.push("/")}>
            Market Place
          </Typography>
        </Box>
        <Avatar
          alt="name"
          src="https://res.cloudinary.com/dux0yt3qn/image/upload/v1620211563/GroupProject/EZT-c_SUEAQVwX8_oxti1w.jpg"
        />
        Chiwawa
      </Toolbar>
    </AppBar>
  );
}
export default Header;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Avatar, Box, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "#242526",
  },
}));

function Header(props) {
  const { palette } = props;
  const classes = useStyles(palette);
  //
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Box flexGrow={1}>MarketPlace</Box>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </Toolbar>
    </AppBar>
  );
}
export default Header;

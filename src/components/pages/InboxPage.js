import React from "react";
import SideBar from "../layout/SideBar";
import InboxContent from "../layout/InboxContent";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#18191a",
    //backgroundColor: "#18191a",

    // flexGrow: 1,
    // height: 100,
  },
  // paper: {
  //   padding: theme.spacing(2),
  //   textAlign: "center",
  //   backgroundColor: "black",
  //   height: 100,
  // },
}));

function InboxPage() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Grid container>
        <Grid item xs={2}>
          <SideBar />
        </Grid>

        <Grid item xs={10}>
          <InboxContent />
        </Grid>
      </Grid>
    </Box>
  );
}

export default InboxPage;

import React from "react";
import SideBar from "../layout/SideBar";
import Content from "../layout/Content";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid } from "@material-ui/core";

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

function HomePage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={2}>
          <SideBar />
        </Grid>

        <Grid item xs={10}>
          <Content />
        </Grid>
      </Grid>
    </div>
  );
}

export default HomePage;

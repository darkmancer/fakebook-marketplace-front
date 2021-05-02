import React from "react";
import Header from "../layout/Header";
import SideBar from "../layout/SideBar";
import Content from "../layout/Content";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function HomePage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs>
          <Header />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={3}>
          <SideBar />
        </Grid>
        <Grid item xs>
          <Content />
        </Grid>
      </Grid>
    </div>
  );
}

export default HomePage;

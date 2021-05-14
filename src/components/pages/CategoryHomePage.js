import React from "react";
import CategoriesSideBar from "../layout/Categories/CategoriesSideBar";
import HomeContent from "../layout/Categories/Homes/HomeContent";
import Header from "../layout/Header";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid } from "@material-ui/core";

const drawerWidth = 360;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "#18191a",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  //ถ้า sm ขึ้นไปจะทำอะไร
  content: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexGrow: 1,
      margin: theme.spacing(3),
    },
    [theme.breakpoints.down("sm")]: {
      flexShrink: 0,
      padding: theme.spacing(1),
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
}));

function CategoryHomePage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header className={classes.appBar} position="fixed" />

      <nav className={classes.drawer}>
        <CategoriesSideBar />
      </nav>

      <main className={classes.content}>
        <HomeContent />
      </main>
    </div>
  );
}

export default CategoryHomePage;

import React from "react";
import SideBar from "../layout/SideBar";
import InboxContent from "../layout/Inbox/InboxContent";
import Header from "../layout/Header";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "#18191a",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: 240,
      flexShrink: 0,
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  //ถ้า sm ขึ้นไปจะทำอะไร
  content: {
    [theme.breakpoints.up("sm")]: {
      width: 240,
      flexGrow: 1,
      padding: theme.spacing(2),
    },
    [theme.breakpoints.down("sm")]: {
      flexShrink: 0,
      padding: theme.spacing(1),
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${240}px)`,
    },
  },
}));

function InboxPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header className={classes.appBar} position="fixed" />

      <nav className={classes.drawer}>
        <SideBar />
      </nav>

      <main className={classes.content}>
        <InboxContent />
      </main>
    </div>
  );
}

export default InboxPage;

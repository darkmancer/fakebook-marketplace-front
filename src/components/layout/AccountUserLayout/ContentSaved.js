import { Box, Paper, TextField } from "@material-ui/core";
import React from "react";
import { MdBook, MdBookmark } from "react-icons/md";
import { useStyles } from "./UseStyleAccountPage";

function ContentSaved() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.paperContent}>
        <MdBookmark size="150" style={{ color: "#FFFFFF" }} />
        <h3>When you start your listing will "Appear here"</h3>
      </div>
    </>
  );
}

export default ContentSaved;

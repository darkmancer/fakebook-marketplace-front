import { Button, Paper } from "@material-ui/core";
import React from "react";
import { MdAdd, MdStore } from "react-icons/md";
import { useHistory } from "react-router-dom";
import { useStyles } from "./UseStyleAccountPage";
function ContentAccount() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <>
      <div className={classes.paperContent}>
        <MdStore size="150" style={{ color: "#FFFFFF" }} />
        <h3>When you start your listing will "Appear here"</h3>
        <Button
          onClick={() => {
            history.push("/myListings");
          }}
          className={classes.buttonCreateNewList}
          style={{ width: "210px" }}>
          <MdAdd style={{ marginRight: "10px" }} />
          Create New Listing
        </Button>
      </div>
    </>
  );
}

export default ContentAccount;

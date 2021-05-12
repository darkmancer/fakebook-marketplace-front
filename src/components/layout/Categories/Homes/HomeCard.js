import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";
import RoomIcon from "@material-ui/icons/Room";
import { useStyles } from "./StyleHome";
import "../../Content.css";
function HomeCard() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <>
      <img
        className={classes.paper}
        src="https://res.cloudinary.com/dux0yt3qn/image/upload/v1620792410/GroupProject/Si-Racha-Thailand_tpj01s.jpg"
        onClick={() => history.push("/select/home")}
      />
      <h3>Price</h3>
      <h3>estate_type</h3>
      <h4>bangkok</h4>
    </>
  );
}
export default HomeCard;

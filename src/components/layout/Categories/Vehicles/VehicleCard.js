import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";
import RoomIcon from "@material-ui/icons/Room";
import { useStyles } from "./StyleVehicle";
import "../../Content.css";
function VehiclesCard() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <>
      <img
        className={classes.paper}
        src="https://res.cloudinary.com/dux0yt3qn/image/upload/v1620736392/GroupProject/e254bc159f318a8abd4cce7ac16a095b_c3tr7v.jpg"
        onClick={() => history.push("/select/vehicle")}
      />
      <h3>Brand</h3>
      <h3>Model</h3>
      <h4>year</h4>
    </>
  );
}
export default VehiclesCard;

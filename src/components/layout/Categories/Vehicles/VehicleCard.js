import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";
import RoomIcon from "@material-ui/icons/Room";
import { useStyles } from "./StyleVehicle";
import "../../Content.css";
function VehiclesCard({ product }) {
  const classes = useStyles();
  const history = useHistory();
  return (
    <>
      <img
        className={classes.paper}
        style={{
          overflow: "hidden",
          objectFit: "cover",
          objectPosition: "50% 50%",
        }}
        src={product?.Photos[0]?.post}
        onClick={() => history.push("/select/vehicle")}
      />
      <h3>
        ฿
        {product.price
          ?.toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          .slice(0, -3)}
      </h3>
      <h3>{`${product.year} ${product.brand} ${product.model}`}</h3>
      <h4>{product.location}</h4>
    </>
  );
}
export default VehiclesCard;

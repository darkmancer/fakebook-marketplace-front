import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";
import RoomIcon from "@material-ui/icons/Room";
import { useStyles } from "./StyleGoods";
import "../../Content.css";
function GoodsCard({ product }) {
  const classes = useStyles();
  const history = useHistory();
  return (
    <>
      <img
        className={classes.paper}
        src={product?.Photos[0]?.post}
        onClick={() => history.push("/select/goods")}
      />
      <h3>{product?.price}</h3>
      <h3>{product?.title}</h3>
      <h4>{product?.location}</h4>
    </>
  );
}
export default GoodsCard;

import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";
import RoomIcon from "@material-ui/icons/Room";
import { useStylesContent } from "./UseStyleContent";
import "./Content.css";
function ProductCard() {
  const classes = useStylesContent();
  const history = useHistory();
  return (
    <>
      <img
        className={classes.paper}
        src="./pexels-photo-4109111.jpeg"
        onClick={() => history.push("/select/product")}
      />
      <h3>Product Title</h3>
      <h3>price</h3>
      <h4>Bangkok,Thailand</h4>
    </>
  );
}
export default ProductCard;

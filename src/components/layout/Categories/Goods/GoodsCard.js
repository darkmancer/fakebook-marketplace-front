import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";
import RoomIcon from "@material-ui/icons/Room";
import { useStyles } from "./StyleGoods";
import "../../Content.css";
function GoodsCard() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <>
      <img
        className={classes.paper}
        src="https://res.cloudinary.com/dux0yt3qn/image/upload/v1620795817/GroupProject/158394224_767631524187876_8650270203093827287_n_wwcmkr.jpg"
        onClick={() => history.push("/select/goods")}
      />
      <h3>title</h3>
      <h3>price</h3>
      <h4>bangkok</h4>
    </>
  );
}
export default GoodsCard;

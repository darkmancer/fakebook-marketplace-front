import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";
import RoomIcon from "@material-ui/icons/Room";
import { useStyles } from "./StyleHome";
import "../../Content.css";
function HomeCard({product}) {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div>
      <img
        className={classes.paper}
        style={{
          overflow: "hidden",
          objectFit: "cover",
          objectPosition: "50% 50%",
        }}
        src={product?.Photos[0]?.post}
        onClick={() => history.push("/select/home")}
      />
      <h3>
        ฿
        {product.price
          ?.toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          .slice(0, -3)}
      </h3>
      <h3>{product.title}</h3>
      <h4>{product.location}</h4>
    </div>
  );
}
export default HomeCard;

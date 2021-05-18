import { Typography } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";

import { useStyles } from "./UseStyleAccountPage";

function CommenceProductCard() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div>
      <img
        className={classes.paperImg}
        src="./pexels-photo-4109111.jpeg"
        alt="Product"
        onClick={() => history.push("/select/product")}
      />
      <div>
        <Typography>Product Title: </Typography>
        <Typography>Price</Typography>
        <Typography>Product Title: </Typography>
      </div>
    </div>
  );
}
export default CommenceProductCard;

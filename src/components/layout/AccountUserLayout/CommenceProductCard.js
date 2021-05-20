import { Typography } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";

import { useStyles } from "./UseStyleAccountPage";

function CommenceProductCard({ product }) {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div>
      <img
        className={classes.paperImg}
        src={product?.Photos[0]?.post}
        alt="Product"
        onClick={() => history.push("/select/product/" + product.id)}
      />
      <div>
        <Typography className={classes.textCommeceForm}>
          Product Title: {product?.title}
        </Typography>
        <Typography className={classes.textCommeceForm}>
          Price: {product?.price} Baht
        </Typography>
      </div>
    </div>
  );
}
export default CommenceProductCard;

import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";
import RoomIcon from "@material-ui/icons/Room";
import { useStylesContent } from "./UseStyleContent";
import "./Content.css";
function ProductCard({ product }) {
  const classes = useStylesContent();
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
        src={product.Photos ? product?.Photos[0]?.post : null}
        onClick={() => history.push("/select/product")}
      />
      <h3>{product?.location.includes("Thailand") ? "฿":"$"}
        {product?.price
          ?.toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          .slice(0, -3)}
      </h3>
      <h3>{product?.title}</h3>
      <h4>{product?.location}</h4>
    </>
  );
}
export default ProductCard;

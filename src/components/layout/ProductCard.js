/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Typography } from "@material-ui/core";
import RoomIcon from "@material-ui/icons/Room";
import { useStylesContent } from "./UseStyleContent";
import "./Content.css";
function ProductCard({ product,size, setOpen, setTrigger, trigger}) {
  const classes = useStylesContent();
  const history = useHistory();
  function handleClick() {
    setOpen(false)
    setTrigger(!trigger)
    history.push(`/select/product/${product.id}`)
    console.log(product.id)
    window.location.reload()
  }
  if (size === "mini") {
    return (
      <div
        style={{
          width: "100px",
          height: "100px",
          display: "inline-block",
          backgroundColor: "white",
          zIndex: "1000"
        }}
         onClick={handleClick} 
      >
        <img
          className={classes.paper}
          style={{
            width: "100px",
            height: "100px",
            overflow: "hidden",
            objectFit: "cover",
            objectPosition: "50% 50%",
          }}
          src={product?.Photos[0]?.post}
        />
        <Typography variant="body1" component="p">
          {product?.location.includes("Thailand") ? "฿" : "$"}
          {product?.price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </Typography>

        <Typography variant="caption" component="p">
          {product?.title}
        </Typography>
        <Typography variant="caption" component="p">
          {product?.location}
        </Typography>
      </div>
    );

  } else {
    return (
      <div style={{ padding: "15", width: "300px" }}>
        <img
          className={classes.paper}
          style={{
            overflow: "hidden",
            objectFit: "cover",
            objectPosition: "50% 50%",
          }}
          src={product?.Photos[0]?.post}
          onClick={() => history.push(`/select/product/${product.id}`)}
        />
        <Typography variant="h4" component="p" style={{ color: "white" }}>
          {product?.location.includes("Thailand") ? "฿" : "$"}
          {product?.price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </Typography>
        <Typography variant="h5" component="p" style={{ color: "white" }}>
          {product?.title}{" "}
        </Typography>
        <Typography variant="h6" component="p" style={{ color: "white" }}>
          {product?.location}{" "}
        </Typography>
      </div>
    );
  }

  
}
export default ProductCard;

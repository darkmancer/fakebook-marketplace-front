import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import RoomIcon from "@material-ui/icons/Room";
import "./Content.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    width: "auto",
    borderRadius: 6,
    margin: theme.spacing(1),
    padding: theme.spacing(0),
  },
  img: {
    height: 250,
    width: "100%",
    borderRadius: "6px",
    margin: theme.spacing(1),
  },
}));
const product = [
  {
    ProductTitle: "Pizza112",
    pic: "./pexels-photo-4109111.jpeg",
    price: 200,
    location: "Bangkok,Thailiand",
  },
  {
    ProductTitle: "Pizza113",
    pic: "./pexels-photo-4109111.jpeg",
    price: 200,
    location: "Bangkok,Thailiand",
  },

  {
    ProductTitle: "Pizza114",
    pic: "./pexels-photo-4109111.jpeg",
    price: 200,
    location: "Bangkok,Thailiand",
  },
  {
    ProductTitle: "Pizza115",
    pic: "./pexels-photo-4109111.jpeg",
    price: 200,
    location: "Bangkok,Thailiand",
  },
  {
    ProductTitle: "Pizza116",
    pic: "./pexels-photo-4109111.jpeg",
    price: 200,
    location: "Bangkok,Thailiand",
  },
  {
    ProductTitle: "Pizza117",
    pic: "./pexels-photo-4109111.jpeg",
    price: 200,
    location: "Bangkok,Thailiand",
  },
  {
    ProductTitle: "Pizza118",
    pic: "./pexels-photo-4109111.jpeg",
    price: 200,
    location: "Bangkok,Thailiand",
  },
  {
    ProductTitle: "Pizza119",
    pic: "./pexels-photo-4109111.jpeg",
    price: 200,
    location: "Bangkok,Thailiand",
  },
  {
    ProductTitle: "Pizza120",
    pic: "./pexels-photo-4109111.jpeg",
    price: 200,
    location: "Bangkok,Thailiand",
  },
];
function Content() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className="container-content">
      <div className="container-text">
        <h2 className="catagories-text">Today's Pick</h2>

        <h5 className="location-text">
          <RoomIcon />
          bangkok 60km
        </h5>
      </div>

      <Grid container spacing={1}>
        <Grid item xs={15}>
          <Grid container justify="flex-start">
            {product?.map((product, idx) => {
              return (
                <Grid item xs={3} key={idx}>
                  <div
                    className={classes.paper}
                    onClick={() => history.push("/product")}>
                    <img
                      className={classes.img}
                      src={product.pic}
                      alt=""
                    />

                    <div
                      style={{
                        textAlign: "left",
                        paddingLeft: "10px",
                      }}>
                      <h3>Product Title : {product.ProductTitle}</h3>
                      <h3>price : {product.price} </h3>
                      <h4>{product.location}</h4>
                    </div>
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
export default Content;

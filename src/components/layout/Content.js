import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import RoomIcon from "@material-ui/icons/Room";
import "./Content.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 300,
    width: 300,
    borderRadius: 5,
  },
}));

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
            <Grid item xs={3}>
              <img
                className={classes.paper}
                src="./pexels-photo-4109111.jpeg"
                onClick={() => history.push("/product")}
              />
              <h3>Product Title</h3>
              <h3>price</h3>
              <h4>Bangkok,Thailand</h4>
            </Grid>

            <Grid item xs={3}>
              <img
                className={classes.paper}
                src="./pexels-photo-4109111.jpeg"
              />
              <h3>Product Title</h3>
              <h3>price</h3>
              <h4>Bangkok,Thailand</h4>
            </Grid>
            <Grid item xs={3}>
              <img
                className={classes.paper}
                src="./pexels-photo-4109111.jpeg"
              />
              <h3>Product Title</h3>
              <h3>price</h3>
              <h4>Bangkok,Thailand</h4>
            </Grid>
            <Grid item xs={3}>
              <img
                className={classes.paper}
                src="./pexels-photo-4109111.jpeg"
              />
              <h3>Product Title</h3>
              <h3>price</h3>
              <h4>Bangkok,Thailand</h4>
            </Grid>
            <Grid item xs={3}>
              <img
                className={classes.paper}
                src="./pexels-photo-4109111.jpeg"
              />
              <h3>Product Title</h3>
              <h3>price</h3>
              <h4>Bangkok,Thailand</h4>
            </Grid>
            <Grid item xs={3}>
              <img
                className={classes.paper}
                src="./pexels-photo-4109111.jpeg"
              />
              <h3>Product Title</h3>
              <h3>price</h3>
              <h4>Bangkok,Thailand</h4>
            </Grid>
            <Grid item xs={3}>
              <img
                className={classes.paper}
                src="./pexels-photo-4109111.jpeg"
              />
              <h3>Product Title</h3>
              <h3>price</h3>
              <h4>Bangkok,Thailand</h4>
            </Grid>
            <Grid item xs={3}>
              <img
                className={classes.paper}
                src="./pexels-photo-4109111.jpeg"
              />
              <h3>Product Title</h3>
              <h3>price</h3>
              <h4>Bangkok,Thailand</h4>
            </Grid>
            <Grid item xs={3}>
              <img
                className={classes.paper}
                src="./pexels-photo-4109111.jpeg"
              />
              <h3>Product Title</h3>
              <h3>price</h3>
              <h4>Bangkok,Thailand</h4>
            </Grid>
            <Grid item xs={3}>
              <img
                className={classes.paper}
                src="./pexels-photo-4109111.jpeg"
              />
              <h3>Product Title</h3>
              <h3>price</h3>
              <h4>Bangkok,Thailand</h4>
            </Grid>
            <Grid item xs={3}>
              <img
                className={classes.paper}
                src="./pexels-photo-4109111.jpeg"
              />
              <h3>Product Title</h3>
              <h3>price</h3>
              <h4>Bangkok,Thailand</h4>
            </Grid>
            <Grid item xs={3}>
              <img
                className={classes.paper}
                src="./pexels-photo-4109111.jpeg"
              />
              <h3>Product Title</h3>
              <h3>price</h3>
              <h4>Bangkok,Thailand</h4>
            </Grid>
            <Grid item xs={3}>
              <img
                className={classes.paper}
                src="./pexels-photo-4109111.jpeg"
              />
              <h3>Product Title</h3>
              <h3>price</h3>
              <h4>Bangkok,Thailand</h4>
            </Grid>
            <Grid item xs={3}>
              <img
                className={classes.paper}
                src="./pexels-photo-4109111.jpeg"
              />
              <h3>Product Title</h3>
              <h3>price</h3>
              <h4>Bangkok,Thailand</h4>
            </Grid>
            <Grid item xs={3}>
              <img
                className={classes.paper}
                src="./pexels-photo-4109111.jpeg"
              />
              <h3>Product Title</h3>
              <h3>price</h3>
              <h4>Bangkok,Thailand</h4>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
export default Content;

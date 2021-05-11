import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";
import RoomIcon from "@material-ui/icons/Room";

import "../Content.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 300,
    width: 300,
    borderRadius: 5,
    margin: theme.spacing(1),
  },
  containerText: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(8),
  },
  text: {
    color: "white",
  },
}));

function VehiclesContent() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Box>
      <Box className={classes.containerText}>
        <h2 className={classes.text}>Vehicles</h2>
        <h5 className="location-text">
          <RoomIcon />
          bangkok 60km
        </h5>
      </Box>

      <Grid container spacing={1}>
        <Grid item xs={15}>
          <Grid container justify="flex-start">
            <Grid item xs={3}>
              <img
                className={classes.paper}
                src="https://res.cloudinary.com/dux0yt3qn/image/upload/v1620736392/GroupProject/e254bc159f318a8abd4cce7ac16a095b_c3tr7v.jpg"
                onClick={() => history.push("/product")}
              />
              <h3>Brand</h3>
              <h3>Model</h3>
              <h4>year</h4>
            </Grid>

            <Grid item xs={3}>
              <img
                className={classes.paper}
                src="https://res.cloudinary.com/dux0yt3qn/image/upload/v1620736392/GroupProject/e254bc159f318a8abd4cce7ac16a095b_c3tr7v.jpg"
              />
              <h3>Brand</h3>
              <h3>Model</h3>
              <h4>year</h4>
            </Grid>
            <Grid item xs={3}>
              <img
                className={classes.paper}
                src="https://res.cloudinary.com/dux0yt3qn/image/upload/v1620736392/GroupProject/e254bc159f318a8abd4cce7ac16a095b_c3tr7v.jpg"
              />
              <h3>Brand</h3>
              <h3>Model</h3>
              <h4>year</h4>
            </Grid>
            <Grid item xs={3}>
              <img
                className={classes.paper}
                src="https://res.cloudinary.com/dux0yt3qn/image/upload/v1620736392/GroupProject/e254bc159f318a8abd4cce7ac16a095b_c3tr7v.jpg"
              />
              <h3>Brand</h3>
              <h3>Model</h3>
              <h4>year</h4>
            </Grid>
            <Grid item xs={3}>
              <img
                className={classes.paper}
                src="https://res.cloudinary.com/dux0yt3qn/image/upload/v1620736392/GroupProject/e254bc159f318a8abd4cce7ac16a095b_c3tr7v.jpg"
              />
              <h3>Brand</h3>
              <h3>Model</h3>
              <h4>year</h4>
            </Grid>
            <Grid item xs={3}>
              <img
                className={classes.paper}
                src="https://res.cloudinary.com/dux0yt3qn/image/upload/v1620736392/GroupProject/e254bc159f318a8abd4cce7ac16a095b_c3tr7v.jpg"
              />
              <h3>Brand</h3>
              <h3>Model</h3>
              <h4>year</h4>
            </Grid>
            <Grid item xs={3}>
              <img
                className={classes.paper}
                src="https://res.cloudinary.com/dux0yt3qn/image/upload/v1620736392/GroupProject/e254bc159f318a8abd4cce7ac16a095b_c3tr7v.jpg"
              />
              <h3>Brand</h3>
              <h3>Model</h3>
              <h4>year</h4>
            </Grid>
            <Grid item xs={3}>
              <img
                className={classes.paper}
                src="https://res.cloudinary.com/dux0yt3qn/image/upload/v1620736392/GroupProject/e254bc159f318a8abd4cce7ac16a095b_c3tr7v.jpg"
              />
              <h3>Brand</h3>
              <h3>Model</h3>
              <h4>year</h4>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
export default VehiclesContent;

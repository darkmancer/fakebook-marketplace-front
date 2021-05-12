import React from "react";
import { useHistory } from "react-router-dom";
import { useStyles } from "./StyleHome";
import { Box, Grid } from "@material-ui/core";
import RoomIcon from "@material-ui/icons/Room";
import HomeCard from "./HomeCard";

import "../../Content.css";

function HomeContent() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Box>
      <Box className={classes.containerText}>
        <h2 className={classes.text}>Home</h2>
        <h5 className="location-text">
          <RoomIcon />
          bangkok 60km
        </h5>
      </Box>

      <Grid container spacing={1}>
        <Grid item xs={15}>
          <Grid container justify="flex-start">
            <Grid item xs={3}>
              <HomeCard />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
export default HomeContent;

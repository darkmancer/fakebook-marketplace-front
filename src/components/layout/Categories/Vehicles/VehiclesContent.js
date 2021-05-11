import React from "react";
import { useHistory } from "react-router-dom";
import { useStyles } from "./StyleVehicle";
import { Box, Grid } from "@material-ui/core";
import RoomIcon from "@material-ui/icons/Room";
import VehiclesCard from "./VehicleCard";

import "../../Content.css";

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
              <VehiclesCard />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
export default VehiclesContent;

import React from "react";
import { useHistory } from "react-router-dom";
import { Box, Grid } from "@material-ui/core";
import { useStylesContent } from "./UseStyleContent";
import RoomIcon from "@material-ui/icons/Room";
import ProductCard from "./ProductCard";

import "./Content.css";

function Content() {
  const classes = useStylesContent();
  const history = useHistory();

  return (
    <Box>
      <Box className={classes.containerText}>
        <h2 className={classes.text}>Today's Pick</h2>
        <h5 className="location-text">
          <RoomIcon />
          bangkok 60km
        </h5>
      </Box>

      <Grid container spacing={1}>
        <Grid item xs={15}>
          <Grid container justify="flex-start">
            <Grid item xs={3}>
              <ProductCard />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
export default Content;

import { Box, Button, Paper, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./UseStyleAccountPage";
import { AiFillFire } from "react-icons/ai";
import { RiShareForwardFill } from "react-icons/ri";
function MyListing() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.contentListing}>
        <Paper className={classes.paperListing}>
          <Box className={classes.contentInmyList}>
            <img
              src="https://res.cloudinary.com/risingnova/image/upload/v1620584776/sai_gdtaaz.jpg"
              alt="list"
              width="150px"
              height="150px"
              style={{ borderRadius: 6 }}
            />
          </Box>
          <Box className={classes.contentInmyList}>
            <Typography className={classes.ListTitle}>
              Burger
            </Typography>
            <Typography className={classes.ListPrice}>
              ฿1000
            </Typography>
            <Typography className={classes.ListStatus}>
              In stock
            </Typography>
            <Box className={classes.flexButtonInlist}>
              <Button className={classes.buttonMark}>
                Mark Out of Stock
              </Button>
              <Button
                className={classes.buttonListing}
                startIcon={<AiFillFire />}>
                Boost Listing
              </Button>

              <Button
                className={classes.buttonShare}
                startIcon={<RiShareForwardFill />}>
                Share
              </Button>
              <Button className={classes.buttonListingEdit}>
                ...
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  );
}

export default MyListing;

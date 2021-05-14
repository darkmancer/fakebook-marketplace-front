import { Box, Button, Grid } from "@material-ui/core";
import {
  Avatar,
  Divider,
  Paper,
  Typography,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import React from "react";
import { MdHome } from "react-icons/md";

import CommenceProductCard from "./CommenceProductCard";

import { useStyles } from "./UseStyleAccountPage";

function CommenceProfileForm({ getModalStyle }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(3);
  const [modalStyle] = React.useState(getModalStyle);
  return (
    <div style={modalStyle} className={classes.paper}>
      <Paper className={classes.paperCommenceModal}>
        <div>
          <h2 className={classes.CommenceHeaderModal}>
            Commence Profile
          </h2>
        </div>
        <Divider className={classes.DividerModal} light />
        <Avatar
          className={classes.AvatarCommenceModal}
          alt="name"
          src="https://res.cloudinary.com/dux0yt3qn/image/upload/v1620211563/GroupProject/EZT-c_SUEAQVwX8_oxti1w.jpg"
        />
        <h1 className={classes.nameCommenceModal}>Chiwawa</h1>
        <div className={classes.FlexCenter}>
          <Button className={classes.buttonCommenceModal}>
            Share
          </Button>
          <Button className={classes.buttonCommenceModal}>
            View Profile
          </Button>
        </div>
        <br></br>
        <Divider className={classes.DividerModal} light />

        <Box component="fieldset" mb={3} borderColor="transparent">
          <Typography className={classes.RatingHead}>
            Seller Ratings
          </Typography>
          <Rating
            name="read-only"
            value={value}
            readOnly
            className={classes.RatingModal}
          />
          <Typography className={classes.RatingText}>
            Ratings: Good
          </Typography>
          <Typography className={classes.RatingsubText}>
            (Visit to the public after 0 ratings)
          </Typography>
        </Box>
        <Divider className={classes.DividerModal} light />
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Typography className={classes.RatingHead}>
            About
          </Typography>
          <div className={classes.FlexIcon}>
            <MdHome size="34" className={classes.IconHome} />
            <Typography className={classes.RatingText}>
              Live in
            </Typography>
            <Typography className={classes.TextHome}>
              Bangkok
            </Typography>
          </div>
        </Box>
        <Divider className={classes.DividerModal} light />
        <Box component="fieldset" borderColor="transparent">
          <Typography className={classes.TextHome}>
            MarketPlace Listings - 3
          </Typography>

          <div className={classes.GridFlex}>
            <CommenceProductCard />
          </div>
        </Box>
        <Divider className={classes.DividerModal} light />
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Typography className={classes.TextHome}>
            Buy & Sell Group Listing
          </Typography>

          <div className={classes.GridFlex}>
            <CommenceProductCard />
          </div>
        </Box>
        <Divider className={classes.DividerModal} light />
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Typography className={classes.TextHome}>
            Profile Selling Listings - 0
          </Typography>

          <div className={classes.GridFlex}>
            <CommenceProductCard />
          </div>
        </Box>
        <br></br>
        <br></br>
        <br></br>
      </Paper>
    </div>
  );
}

export default CommenceProfileForm;

import { Avatar, Paper, Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Box, Drawer, Toolbar } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { useStyles } from "./UseStyleCreatePage";
function DrawerCreateItem() {
  const [item, setItem] = useState();
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.paperContainer}>
        <Toolbar />
        <div className={classes.div}>
          <Box
            style={{ display: "flex" }}
            justifyContent="space-between">
            <Typography className={classes.NameAvatar}>
              Item for Sale
            </Typography>
            <Button className={classes.ButtonCreate}>
              Save Draft
            </Button>
          </Box>
          <div className={classes.FlexAvatar}>
            <Avatar
              style={{ marginRight: 10 }}
              className={classes.AvatarCreateDrawer}
              alt="name"
              src="https://res.cloudinary.com/dux0yt3qn/image/upload/v1620211563/GroupProject/EZT-c_SUEAQVwX8_oxti1w.jpg"
            />
            <div>
              <h4 className={classes.NameAvatar}>Chiwawa</h4>
              <h5 className={classes.TextStatusAvatar}>
                Listing to Marketplace
              </h5>
            </div>
          </div>
        </div>
        <Box className={classes.drawerContainer}>
          <Typography className={classes.TextHeader}>
            Photos - 0/10 You can add up to 10 photos
          </Typography>
          <Paper
            className={classes.PaperAddPhoto}
            variant="outlined"
            style={{ border: "1px solid #616161" }}>
            <Button className={classes.ButtonAddPhoto}>
              Add Photos
            </Button>
          </Paper>
        </Box>
      </Paper>
    </>
  );
}

export default DrawerCreateItem;

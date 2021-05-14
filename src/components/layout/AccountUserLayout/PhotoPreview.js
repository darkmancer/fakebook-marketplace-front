import React from "react";
import { useStyles } from "./UseStyleCreatePage";
import {
  Box,
  Paper,
  Typography,
  Divider,
  Avatar,
} from "@material-ui/core";

function PhotoPreview({ showPhotos }) {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.PaperPreviewPhoto}>
        <Typography className={classes.PreviewTitle}>
          Preview Bitch!
        </Typography>
        <Box
          className={classes.PreviewPhotoContent}
          border={1}
          borderColor="grey.600">
          <div className={classes.divInPreview}>
            {showPhotos.length === 0 ? (
              <Typography className={classes.textInDiv}>
                Your Listings Preview
              </Typography>
            ) : (
              showPhotos.map((pic, idx) => (
                <img src={pic.file} alt="PreviewPhoto" />
              ))
            )}
          </div>
          <Box
            style={{ padding: 10 }}
            className={classes.ContainerContentPreview}>
            <Typography className={classes.titlePreview}>
              Title :
            </Typography>
            <Typography className={classes.contentPreview}>
              Price
            </Typography>
            <Divider className={classes.DividerModal} light />
            <Typography className={classes.contentPreview}>
              Details
            </Typography>
            <Typography className={classes.contentPreview}>
              Condition
            </Typography>
            <Typography className={classes.contentPreview}>
              Brand
            </Typography>
            <Typography className={classes.contentPreview}>
              Material
            </Typography>
            <Typography className={classes.contentPreview}>
              Description
            </Typography>
            <Typography className={classes.contentPreview}>
              Tags
            </Typography>
            <Typography className={classes.contentPreview}>
              Location
            </Typography>
            <Typography className={classes.contentPreview}>
              Location
            </Typography>
            <Divider className={classes.DividerModal} light />
            <Typography className={classes.SellerPreview}>
              Seller Information
            </Typography>
            <div className={classes.FlexAvatar}>
              <Avatar
                style={{ marginRight: 10 }}
                className={classes.AvatarCreateDrawer}
                alt="name"
                src="https://res.cloudinary.com/dux0yt3qn/image/upload/v1620211563/GroupProject/EZT-c_SUEAQVwX8_oxti1w.jpg"
              />
              <Typography className={classes.NamePreview}>
                Chiwawa
              </Typography>
            </div>
          </Box>
        </Box>
      </Paper>
    </>
  );
}

export default PhotoPreview;

import React from "react";
import { useStyles } from "./UseStyleCreatePage";
import "react-gallery-carousel/dist/index.css";
import {
  Box,
  Paper,
  Typography,
  Divider,
  Avatar,
} from "@material-ui/core";
import { Chip } from "@material-ui/core";
import Carousel from "react-gallery-carousel";

function PhotoPreviewEdit({ showPhotos, item, tags, address, user }) {
  const classes = useStyles();
  const images = showPhotos.map((pic) => ({
    src: `${pic.post}`,
  }));

  return (
    <>
      <Paper className={classes.PaperPreviewPhoto}>
        <Typography className={classes.PreviewTitle}>
          Preview
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
              // showPhotos.map((pic, idx) => (
              //   <img src={pic.file} key={idx} alt="PreviewPhoto" />
              // ))
              <div>
                <Carousel
                  images={images}
                  canAutoPlay={false}
                  style={{
                    minHeight: 300,
                    minWidth: 300,
                    borderRadius: 6,
                  }}
                />
              </div>
            )}
          </div>
          <Box
            style={{ padding: 10 }}
            className={classes.ContainerContentPreview}>
            <Typography className={classes.titlePreview}>
              Title : {item.title}
            </Typography>
            <Typography className={classes.contentPreview}>
              Price : {item.price}
            </Typography>
            <Divider className={classes.DividerModal} light />
            {/* <Typography className={classes.contentPreview}>
              Details : 
            </Typography> */}
            <Typography className={classes.contentPreview}>
              Condition {item.condition}
            </Typography>
            {/* <Typography className={classes.contentPreview}>
              Brand
            </Typography> */}
            {/* <Typography className={classes.contentPreview}>
              Material
            </Typography> */}
            <Typography className={classes.contentPreview}>
              Description : {item.description}
            </Typography>
            <Typography className={classes.contentPreview}>
              Tags :
              <div className={classes.paperTag}>
                {tags.map((tag, index) => (
                  <li key={index}>
                    <Chip label={tag} className={classes.chipTags} />
                  </li>
                ))}
              </div>
            </Typography>
            <Typography className={classes.contentPreview}>
              Location : {address}
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
                {`${user?.firstName} ${user?.lastName}`}
              </Typography>
            </div>
          </Box>
        </Box>
      </Paper>
    </>
  );
}

export default PhotoPreviewEdit;

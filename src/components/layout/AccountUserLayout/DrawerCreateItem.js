import { Avatar, Paper, Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Box, Drawer, Toolbar } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { useStyles } from "./UseStyleCreatePage";
import PhotoPreview from "./PhotoPreview";
import { MdAddToPhotos } from "react-icons/md";
function DrawerCreateItem() {
  const [item, setItem] = useState();
  const [photos, setPhotos] = useState([]);
  const [showPhotos, setShowPhotos] = useState([]);
  const onChangeFilePhotos = (e) => {
    setShowPhotos([...showPhotos]);
    if (photos.length) {
      setPhotos((prev) => [...prev, e.target.files[0]]);
      setShowPhotos([
        ...showPhotos,
        { file: URL.createObjectURL(e.target.files[0]) },
      ]);
    } else {
      setPhotos(e.target.files);
      setShowPhotos([
        { file: URL.createObjectURL(e.target.files[0]) },
      ]);
    }
  };
  console.log(photos.length);
  console.log(photos);
  console.log(showPhotos);
  const classes = useStyles();
  return (
    <div className={classes.flexPageCreateItem}>
      <Paper className={classes.paperContainer}>
        <Toolbar />
        <div className={classes.div}>
          <Box
            style={{ display: "flex" }}
            justifyContent="space-between">
            <Typography className={classes.HeadersTitle}>
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
            <div>
              <input
                accept="image/*"
                className={classes.inputPhoto}
                id="contained-button-file"
                multiple
                type="file"
                onChange={onChangeFilePhotos}
              />
              <label htmlFor="contained-button-file">
                <Button
                  variant="contained"
                  color="primary"
                  component="span"
                  startIcon={<MdAddToPhotos />}
                  className={classes.ButtonAddPhoto}>
                  Add Photos
                </Button>
              </label>
            </div>
          </Paper>
        </Box>
      </Paper>
      <PhotoPreview showPhotos={showPhotos} />
    </div>
  );
}

export default DrawerCreateItem;

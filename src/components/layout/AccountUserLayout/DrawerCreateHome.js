import React, { useState } from "react";
import {
  Box,
  Toolbar,
  TextField,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  Button,
  InputAdornment,
  Switch,
  Avatar,
  Paper,
  Typography,
} from "@material-ui/core";

import { useStyles } from "./UseStyleCreatePage";

import InputTag from "./InputTag";

import PreviewHome from "./PreviewHome";
import {
  MdAddToPhotos,
  MdLocationOn,
  MdCancel,
  MdClose,
  MdPublic,
} from "react-icons/md";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { IconButton } from "@material-ui/core";

function DrawerCreateHome() {
  const classes = useStyles();
  const history = useHistory();
  const handleCloseButton = () => {
    history.push("/mylistings");
  };
  const [photos, setPhotos] = useState([]);
  const [showPhotos, setShowPhotos] = useState([]);
  const [tags, setTags] = React.useState([]);
  const handleDelete = (idx) => () => {
    if (photos.length === 1) {
      setShowPhotos([]);
      setPhotos([]);
    } else {
      setShowPhotos((prev) =>
        prev.filter((prev, index) => index !== idx)
      );
      setPhotos((prev) =>
        prev.filter((prev, index) => index !== idx)
      );
    }
  };

  const [item, setItem] = useState({
    title: "",
    price: "",
    estateFor: "",
    estateType: "",
    description: "",
    bedroom: "",
    bathroom: "",
    location: "",
  });
  const onChangeItem = (e) => {
    const { name, value } = e.target;
    setItem((prev) => ({ ...prev, [name]: value }));
  };
  const onChangeFilePhotos = (e) => {
    if (photos.length !== 0) {
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
  return (
    <>
      <div className={classes.flexPageCreateItem}>
        <Paper className={classes.paperContainer}>
          <Toolbar />
          <div className={classes.div}>
            <Box
              style={{ display: "flex" }}
              justifyContent="space-between">
              <Typography className={classes.HeadersTitle}>
                New Home Listing
              </Typography>
              <Button className={classes.ButtonCreate}>
                Save Draft
              </Button>
              <IconButton
                aria-label="delete"
                className={classes.CloseButton}
                size="small"
                onClick={handleCloseButton}>
                <MdClose size="20" />
              </IconButton>
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
              Photos - {photos.length}/10 You can add up to 10 photos
            </Typography>
            {photos.length === 0 ? (
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
            ) : (
              <div className={classes.flexPhotos}>
                {showPhotos?.map((pic, idx) => {
                  return (
                    <Box key={idx}>
                      <img
                        src={pic.file}
                        alt={pic.file}
                        width="80"
                        height="80"
                        style={{
                          borderRadius: 10,
                          margin: 8,
                          display: "block",
                        }}
                      />
                      <MdCancel
                        className={classes.CancelIcon}
                        onClick={handleDelete(idx)}
                        size="18"
                      />
                    </Box>
                  );
                })}
                <Box>
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
                      className={classes.ButtonAddMultiPhoto}>
                      <MdAddToPhotos size="30" />
                    </Button>
                  </label>
                </Box>
              </div>
            )}
          </Box>
          <form>
            <TextField
              label="Title"
              className={classes.InputTextField}
              variant="outlined"
              autoComplete="off"
              onChange={onChangeItem}
              name="title"
              InputLabelProps={{ className: classes.labelTextField }}
            />
            <TextField
              label="Price"
              name="price"
              autoComplete="off"
              className={classes.InputTextField}
              onChange={onChangeItem}
              variant="outlined"
              InputLabelProps={{ className: classes.labelTextField }}
            />
            <FormControl
              variant="outlined"
              className={classes.InputTextFieldCategory}>
              <InputLabel htmlFor="home-for">
                Home for Sale or Rent
              </InputLabel>
              <Select
                label="Home for Sale or Rent"
                id="home-for"
                name="estateFor"
                onChange={onChangeItem}
                inputProps={{
                  name: "estateFor",
                  id: "home-for",
                  classes: {
                    icon: classes.SelectIcon,
                  },
                }}>
                <MenuItem value="RENT">RENT</MenuItem>
                <MenuItem value="SALE">SALE</MenuItem>
              </Select>
            </FormControl>

            <FormControl
              variant="outlined"
              className={classes.InputTextFieldCategory}>
              <InputLabel htmlFor="estate-type">
                EstateType
              </InputLabel>
              <Select
                label="EstateType"
                id="estate-type"
                name="estateType"
                onChange={onChangeItem}
                inputProps={{
                  name: "estateType",
                  id: "estate-type",
                  classes: {
                    icon: classes.SelectIcon,
                  },
                }}>
                <MenuItem value="Apartment">Apartment</MenuItem>
                <MenuItem value="House">House</MenuItem>
                <MenuItem value="Room only">Room only</MenuItem>
                <MenuItem value="Townhouse">Townhouse</MenuItem>
                <MenuItem value="Condo">Condo</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="Number of bedroom"
              name="bedroom"
              autoComplete="off"
              className={classes.InputTextField}
              onChange={onChangeItem}
              variant="outlined"
              InputLabelProps={{ className: classes.labelTextField }}
            />
            <TextField
              label="Number of bathroom"
              name="bathroom"
              autoComplete="off"
              className={classes.InputTextField}
              onChange={onChangeItem}
              variant="outlined"
              InputLabelProps={{ className: classes.labelTextField }}
            />

            <InputTag
              setItem={setItem}
              onChageItem={onChangeItem}
              item={item}
              tags={tags}
              setTags={setTags}
            />
            <TextField
              label="Area"
              name="area"
              className={classes.InputTextField}
              onChange={onChangeItem}
              variant="outlined"
              autoComplete="off"
              InputLabelProps={{ className: classes.labelTextField }}
            />
            <TextField
              label="Property address"
              name="address"
              className={classes.InputTextField}
              onChange={onChangeItem}
              variant="outlined"
              autoComplete="off"
              multiline
              rows={4}
              InputLabelProps={{ className: classes.labelTextField }}
            />
            <TextField
              id="multiline"
              onChange={onChangeItem}
              className={classes.InputTextField}
              name="description"
              label="Description"
              multiline
              autoComplete="off"
              rows={6}
              variant="outlined"
            />
          </form>
          <Button
            variant="outlined"
            disabled={
              item.title === "" && item.price === "" ? true : false
            }
            className={classes.ButtonPublish}
            endIcon={<MdPublic />}>
            Publish
          </Button>
        </Paper>
        <PreviewHome
          showPhotos={showPhotos}
          item={item}
          tags={tags}
        />
      </div>
    </>
  );
}

export default DrawerCreateHome;

import {
  Avatar,
  Backdrop,
  Box,
  Button,
  CircularProgress,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { condition } from "./CategoryMap";

import {
  MdAddToPhotos,
  MdCancel,
  MdClose,
  MdEdit,
} from "react-icons/md";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "../../../config/axios";
import InputTag from "./InputTag";
import PhotoPreview from "./PhotoPreview";
import { useStyles } from "./UseStyleCreatePage";
import { AuthContext } from "../../../context/AuthContextProvider";
import PhotoPreviewEdit from "./PhotoPreviewEdit";
function ContentEdit() {
  const { user } = useContext(AuthContext);

  const address = localStorage.getItem("Address");
  const [tags, setTags] = useState([]);
  const history = useHistory();
  const classes = useStyles();
  const { id } = useParams();
  const handleCloseButton = () => {
    history.push("/mypage");
  };
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
  const [loading, setLoading] = useState(true);
  const [photos, setPhotos] = useState([]);
  const [showPhotos, setShowPhotos] = useState([]);
  const [product, setProduct] = useState(null);
  const [item, setItem] = useState({
    title: "",
    price: "",
    category: "",
    subCategory: "",
    condition: "",
    description: "",
  });
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`/product/${id}`);
        console.log(res.data.product);
        // const file = res.data.product.Photos;
        // console.log(file);
        await setProduct(res.data.product);
        await setPhotos(res.data.product.Photos);
        await setShowPhotos(res.data.product.Photos);
        setLoading(false);
      } catch (err) {
        console.log(`err`, err);
      }
    };
    fetchProduct();
  }, []);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`/product/${id}`);
        console.log(res);
        setProduct(res.data.product);
        setLoading(false);
      } catch (err) {
        console.log(`err`, err);
      }
    };
    fetchProduct();
  }, []);
  console.log(product);
  console.log(photos);
  // console.log(showPhotos);
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
                Item for Sale
              </Typography>

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
                <h4 className={classes.NameAvatar}>
                  {user?.firstName}
                </h4>
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
                    // onChange={onChangeFilePhotos}
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
                        src={pic.post}
                        alt="just file"
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
                    // onChange={onChangeFilePhotos}
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
              //   onChange={onChangeItem}
              name="title"
              value={product?.title}
              InputLabelProps={{ className: classes.labelTextField }}
            />
            <TextField
              label="Price"
              name="price"
              autoComplete="off"
              value={product?.price}
              className={classes.InputTextField}
              //   onChange={onChangeItem}
              variant="outlined"
              InputLabelProps={{ className: classes.labelTextField }}
            />
            {/* <FormControl
              variant="outlined"
              className={classes.InputTextFieldCategory}>
              <InputLabel htmlFor="category-field">
                Category
              </InputLabel>
              <Select
                native
                label="Category"
                // onChange={onChangeItem}
                className={classes.Selector}
                inputProps={{
                  name: "subCategory",
                  id: "category-field",
                  classes: {
                    icon: classes.SelectIcon,
                  },
                }}>
                {Category.map((category, idx) => {
                  <option aria-label="None" value="" />;
                  return (
                    <optgroup
                      key={idx}
                      name="mainType"
                      value={category.Title}
                      label={category.Title}>
                      {category.Menu?.map(({ type }, idx) => (
                        <option key={idx} value={type}>
                          {type}
                        </option>
                      ))}
                    </optgroup>
                  );
                })}
              </Select>
            </FormControl> */}
            <FormControl
              variant="outlined"
              className={classes.InputTextFieldCategory}>
              <InputLabel htmlFor="condition-field">
                Condition
              </InputLabel>
              <Select
                label="Condition"
                id="condition-field"
                name="condition"
                value={product?.condition}
                // onChange={onChangeItem}
                inputProps={{
                  name: "condition",
                  id: "condition-field",
                  classes: {
                    icon: classes.SelectIcon,
                  },
                }}>
                {condition.map((con, idx) => (
                  <MenuItem value={con.condition}>
                    {con.condition}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              id="multiline"
              //   onChange={onChangeItem}
              value={product?.description}
              autoComplete="off"
              className={classes.InputTextField}
              name="description"
              label="Description"
              multiline
              rows={6}
              variant="outlined"
            />
            <InputTag
              setItem={setItem}
              //   onChageItem={onChangeItem}
              item={item}
              tags={tags}
              setTags={setTags}
            />
            {/* <TextField
              className={classes.InputTextField}
              variant="outlined"
              label="Location"
              name="location"
              value={address}
              multiline
              rows={4}
              readOnly
              // onChange={onChangeItem}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MdLocationOn className={classes.iconTag} />
                  </InputAdornment>
                ),
              }}
            /> */}
            {/* <div className={classes.flexBoost}>
              <Typography className={classes.BoostText}>
                Boost Lisiting After Publish
                <Switch
                  color="primary"
                  onChange={toggleBoost}
                  className={classes.BoostButton}
                />
              </Typography>
            </div> */}
          </form>
          <Box>
            <Button
              variant="outlined"
              disabled={
                item.title === "" && item.price === "" ? true : false
              }
              //   onClick={onPublishSubmit}
              className={classes.ButtonPublish}
              endIcon={<MdEdit />}>
              Edit
            </Button>
          </Box>
        </Paper>

        <PhotoPreviewEdit
          showPhotos={showPhotos}
          item={item}
          tags={tags}
          address={address}
          user={user}
        />
        <Backdrop className={classes.backdrop} open={loading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
      );
    </>
  );
}

export default ContentEdit;

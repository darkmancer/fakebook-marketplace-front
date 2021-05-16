import { Button } from "@material-ui/core";
import {
  Box,
  Toolbar,
  TextField,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  FormControlLabel,
  InputAdornment,
  Switch,
  Avatar,
  Paper,
  Typography,
} from "@material-ui/core";
import InputTag from "./InputTag";
import { Category, condition } from "./CategoryMap";
import React from "react";
import { useState } from "react";
import { useStyles } from "./UseStyleCreatePage";
import PhotoPreview from "./PhotoPreview";
import { MdAddToPhotos, MdLocationOn } from "react-icons/md";

function DrawerCreateItem() {
  const [tags, setTags] = React.useState([]);

  const [item, setItem] = useState({
    title: "",
    price: "",
    category: "",
    subCategory: "",
    condition: "",
    description: "",
    location: "",
  });
  const [photos, setPhotos] = useState([]);
  const [showPhotos, setShowPhotos] = useState([]);

  const onChangeItem = (e) => {
    let values = e.target.value;
    const { name, value } = e.target;

    if (
      values === "Tool" ||
      values === "Furniture" ||
      values === "HouseHold" ||
      values === "Garden" ||
      values === "Appliances"
    ) {
      setItem({
        ...item,
        category: "Home & Garden",
        subCategory: values,
      });
    }
    if (
      values === "Video Games" ||
      values === "Books,Movie & Music"
    ) {
      setItem({
        ...item,
        category: "Entertainment",
        subCategory: values,
      });
    }
    if (
      values === "Bags & Luggage" ||
      values === "Women's Clothing & Shoes" ||
      values === "Men's Clothing & Shoes" ||
      values === "Jewelry & Accessories"
    ) {
      setItem({
        ...item,
        category: "Clothing & Accessories",
        subCategory: values,
      });
    }
    if (
      values === "Health & Beauty" ||
      values === "Pet Supplies" ||
      values === "Baby & Kids" ||
      values === "Toy & Games"
    ) {
      setItem({
        ...item,
        category: "Family",
        subCategory: values,
      });
    }
    if (
      values === "Electronics & Computers" ||
      values === "Moblie Phones"
    ) {
      setItem({
        ...item,
        category: "Electronics",
        subCategory: values,
      });
    }
    if (
      values === "Bicycles" ||
      values === "Arts & Crafts" ||
      values === "Sports & Outdoors" ||
      values === "Auto Parts" ||
      values === "Musical & Intruments" ||
      values === "Antiques & Collectibles"
    ) {
      setItem({
        ...item,
        category: "Hobbies",
        subCategory: values,
      });
    }
    setItem((prev) => ({ ...prev, [name]: value }));
  };
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
  console.log(item);
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
        <form>
          <TextField
            label="Title"
            className={classes.InputTextField}
            variant="outlined"
            onChange={onChangeItem}
            name="title"
            InputLabelProps={{ className: classes.labelTextField }}
          />
          <TextField
            label="Price"
            name="price"
            className={classes.InputTextField}
            onChange={onChangeItem}
            variant="outlined"
            InputLabelProps={{ className: classes.labelTextField }}
          />
          <FormControl
            variant="outlined"
            className={classes.InputTextFieldCategory}>
            <InputLabel htmlFor="category-field">Category</InputLabel>
            <Select
              native
              label="Category"
              onChange={onChangeItem}
              className={classes.Selector}
              inputProps={{
                name: "category",
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
          </FormControl>
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
              onChange={onChangeItem}
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
            onChange={onChangeItem}
            className={classes.InputTextField}
            name="description"
            label="Description"
            multiline
            rows={6}
            variant="outlined"
          />
          <InputTag
            setItem={setItem}
            onChageItem={onChangeItem}
            item={item}
            tags={tags}
            setTags={setTags}
          />
          <TextField
            className={classes.InputTextField}
            variant="outlined"
            label="Location"
            name="location"
            onChange={onChangeItem}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MdLocationOn className={classes.iconTag} />
                </InputAdornment>
              ),
            }}
          />
          <div className={classes.flexBoost}>
            <Typography className={classes.BoostText}>
              Boost Lisiting After Pubish
              <Switch
                color="primary"
                className={classes.BoostButton}
              />
            </Typography>
          </div>
        </form>
      </Paper>
      <PhotoPreview showPhotos={showPhotos} item={item} tags={tags} />
    </div>
  );
}

export default DrawerCreateItem;

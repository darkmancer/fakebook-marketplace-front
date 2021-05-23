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
  CircularProgress,
  Backdrop
} from '@material-ui/core'
import InputTag from './InputTag'
import { Category, condition } from './CategoryMap'
import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { useStyles } from './UseStyleCreatePage'
import PhotoPreview from './PhotoPreview'
import {
  MdAddToPhotos,
  MdLocationOn,
  MdCancel,
  MdClose,
  MdPublic
} from 'react-icons/md'
import { IconButton } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { getCurrentLocation, LocationName } from './functionGeocode'
import axios from '../../../config/axios'
import { AuthContext } from '../../../context/AuthContextProvider'
function DrawerCreateItem() {
  const history = useHistory()
  const [boost, setBoost] = useState(false)
  const [loading, setLoading] = useState(false)
  const { user } = useContext(AuthContext)

  const toggleBoost = () => {
    setBoost((prev) => !prev)
  }
  const handleCloseButton = () => {
    history.push('/mylistings')
  }
  const [photos, setPhotos] = useState([])
  const [showPhotos, setShowPhotos] = useState([])
  const handleDelete = (idx) => () => {
    if (photos.length === 1) {
      setShowPhotos([])
      setPhotos([])
    } else {
      setShowPhotos((prev) => prev.filter((prev, index) => index !== idx))
      setPhotos((prev) => prev.filter((prev, index) => index !== idx))
    }
  }
  useEffect(() => {
    async function getLocation() {
      const currentLocation = await getCurrentLocation()
    }
    getLocation()
  }, [])
  const location = localStorage.getItem('CurLocation')
  const address = localStorage.getItem('Address')
  const [tags, setTags] = React.useState([])
  const optional = tags.join(',')

  const [item, setItem] = useState({
    title: '',
    price: '',
    category: '',
    subCategory: '',
    condition: '',
    description: '',
    location: location
  })
  const onChangeFilePhotos = (e) => {
    setShowPhotos([...showPhotos])
    if (photos.length !== 0) {
      setPhotos((prev) => [...prev, e.target.files[0]])
      setShowPhotos([
        ...showPhotos,
        { file: URL.createObjectURL(e.target.files[0]) }
      ])
    } else {
      setPhotos([e.target.files[0]])
      setShowPhotos([{ file: URL.createObjectURL(e.target.files[0]) }])
    }
  }

  const onPublishSubmit = async () => {
    setLoading(true)
    try {
      const {
        title,
        price,
        category,
        subCategory,
        condition,
        description,
        location
      } = item

      const myFormData = new FormData()
      myFormData.append('title', title)
      myFormData.append('category', category)
      myFormData.append('subCategory', subCategory)
      myFormData.append('condition', condition)
      myFormData.append('description', description)
      myFormData.append('optional', optional)
      myFormData.append('location', location)
      myFormData.append('price', price)
      myFormData.append('boost', boost)
      myFormData.append('productType', 'ITEM')
      myFormData.append('productStatus', 'Available')
      // myFormData.append("multiImage", photos);

      for (let i = 0; i < photos.length; i++) {
        myFormData.append('multiImage', photos[i])
      }
      const res = await axios.post('/product/create-product', myFormData)
      if (res) {
        setLoading(false)
        history.push('/mypage')
      }
    } catch (err) {
      console.log(err)
    }
  }
  const onDraftSubmit = async () => {
    setLoading(true)
    try {
      const {
        title,
        price,
        category,
        subCategory,
        condition,
        description,
        location
      } = item

      const myFormData = new FormData()
      myFormData.append('title', title)
      myFormData.append('category', category)
      myFormData.append('subCategory', subCategory)
      myFormData.append('condition', condition)
      myFormData.append('description', description)
      myFormData.append('optional', optional)
      myFormData.append('location', location)
      myFormData.append('price', price)
      myFormData.append('boost', boost)
      myFormData.append('productType', 'ITEM')
      myFormData.append('productStatus', 'Draft')
      // myFormData.append("multiImage", photos);
      if (photos.length > 0) {
        for (let i = 0; i < photos.length; i++) {
          myFormData.append('multiImage', photos[i])
        }
      }
      const res = await axios.post('/product/create-product', myFormData)
      if (res) {
        setLoading(false)
        history.push('/mypage')
      }
    } catch (err) {
      console.log(err)
    }
  }

  const onChangeItem = (e) => {
    let values = e.target.value
    const { name, value } = e.target

    if (
      values === 'Tool' ||
      values === 'Furniture' ||
      values === 'HouseHold' ||
      values === 'Garden' ||
      values === 'Appliances'
    ) {
      setItem({
        ...item,
        category: 'Home & Garden',
        subCategory: values
      })
    }
    if (values === 'Video Games' || values === 'Books,Movie & Music') {
      setItem({
        ...item,
        category: 'Entertainment',
        subCategory: values
      })
    }
    if (
      values === 'Bags & Luggage' ||
      values === "Women's Clothing & Shoes" ||
      values === "Men's Clothing & Shoes" ||
      values === 'Jewelry & Accessories'
    ) {
      setItem({
        ...item,
        category: 'Clothing & Accessories',
        subCategory: values
      })
    }
    if (
      values === 'Health & Beauty' ||
      values === 'Pet Supplies' ||
      values === 'Baby & Kids' ||
      values === 'Toy & Games'
    ) {
      setItem({
        ...item,
        category: 'Family',
        subCategory: values
      })
    }
    if (values === 'Electronics & Computers' || values === 'Moblie Phones') {
      setItem({
        ...item,
        category: 'Electronics',
        subCategory: values
      })
    }
    if (
      values === 'Bicycles' ||
      values === 'Arts & Crafts' ||
      values === 'Sports & Outdoors' ||
      values === 'Auto Parts' ||
      values === 'Musical & Intruments' ||
      values === 'Antiques & Collectibles'
    ) {
      setItem({
        ...item,
        category: 'Hobbies',
        subCategory: values
      })
    }
    setItem((prev) => ({ ...prev, [name]: value }))
  }

  const classes = useStyles()

  return (
    <div className={classes.flexPageCreateItem}>
      <Paper className={classes.paperContainer}>
        <Toolbar />
        <div className={classes.div}>
          <Box style={{ display: 'flex' }} justifyContent="space-between">
            <Typography className={classes.HeadersTitle}>
              Item for Sale
            </Typography>
            <Button className={classes.ButtonCreate} onClick={onDraftSubmit}>
              Save Draft
            </Button>
            <IconButton
              aria-label="delete"
              className={classes.CloseButton}
              size="small"
              onClick={handleCloseButton}
            >
              <MdClose size="20" />
            </IconButton>
          </Box>
          <div className={classes.FlexAvatar}>
            <Avatar
              style={{ marginRight: 10 }}
              className={classes.AvatarCreateDrawer}
              alt="name"
              src={user.avatar}
            />
            <div>
              <h4 className={classes.NameAvatar}>
                {user?.firstName} {user?.lastName}
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
              style={{ border: '1px solid #616161' }}
            >
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
                    className={classes.ButtonAddPhoto}
                  >
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
                        display: 'block'
                      }}
                    />
                    <MdCancel
                      className={classes.CancelIcon}
                      onClick={handleDelete(idx)}
                      size="18"
                    />
                  </Box>
                )
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
                    className={classes.ButtonAddMultiPhoto}
                  >
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
            className={classes.InputTextFieldCategory}
          >
            <InputLabel htmlFor="category-field">Category</InputLabel>
            <Select
              native
              label="Category"
              onChange={onChangeItem}
              className={classes.Selector}
              inputProps={{
                name: 'subCategory',
                id: 'category-field',
                classes: {
                  icon: classes.SelectIcon
                }
              }}
            >
              {Category.map((category, idx) => {
                ;<option aria-label="None" value="" />
                return (
                  <optgroup
                    key={idx}
                    name="mainType"
                    value={category.Title}
                    label={category.Title}
                  >
                    {category.Menu?.map(({ type }, idx) => (
                      <option key={idx} value={type}>
                        {type}
                      </option>
                    ))}
                  </optgroup>
                )
              })}
            </Select>
          </FormControl>
          <FormControl
            variant="outlined"
            className={classes.InputTextFieldCategory}
          >
            <InputLabel htmlFor="condition-field">Condition</InputLabel>
            <Select
              label="Condition"
              id="condition-field"
              name="condition"
              onChange={onChangeItem}
              inputProps={{
                name: 'condition',
                id: 'condition-field',
                classes: {
                  icon: classes.SelectIcon
                }
              }}
            >
              {condition.map((con, idx) => (
                <MenuItem value={con.condition}>{con.condition}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            id="multiline"
            onChange={onChangeItem}
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
            multiline
            rows={4}
            // onChange={onChangeItem}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MdLocationOn className={classes.iconTag} />
                </InputAdornment>
              )
            }}
          />
          <div className={classes.flexBoost}>
            <Typography className={classes.BoostText}>
              Boost Lisiting After Publish
              <Switch
                color="primary"
                onChange={toggleBoost}
                className={classes.BoostButton}
              />
            </Typography>
          </div>
        </form>
        <Box>
          <Button
            variant="outlined"
            disabled={item.title === '' && item.price === '' ? true : false}
            onClick={onPublishSubmit}
            className={classes.ButtonPublish}
            endIcon={<MdPublic />}
          >
            Publish
          </Button>
        </Box>
      </Paper>

      <PhotoPreview
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
  )
}

export default DrawerCreateItem

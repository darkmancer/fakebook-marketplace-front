import { Box, Button, Grid } from '@material-ui/core'
import { Avatar, Divider, Paper, Typography } from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import React, { useContext, useEffect, useState } from 'react'

import { AuthContext } from '../../../context/AuthContextProvider'
import ProductCard from '../ProductCard'
import { MdModeEdit } from 'react-icons/md'
import axios from '../../../config/axios'
import { useStyles } from './UseStyleAccountPage'

function CommenceProfileForm({ getModalStyle }) {
  const [products, setProducts] = useState([])
  const [open, setOpen] = useState(false)
  const { user } = useContext(AuthContext)
  const [showAvatar, setShowAvatar] = useState({ avatar: user.avatar })
  const [editAvatar, setEditAvatar] = useState({ avatar: '' })

  const getProductId = async () => {
    try {
      const res = await axios.get('/product/get-user-products/' + user.id)
      setProducts(res.data.products)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getProductId()
  }, [user])

  const onChangeFilePhotos = (e) => {
    console.log('e.target.files')
    console.log(e.target.files)
    console.log(e.target.files[0])
    if (e.target.files[0]) {
      console.log('CCK')
      setShowAvatar({ avatar: URL.createObjectURL(e.target.files[0]) })
      setEditAvatar({
        avatar: e.target.files[0]
      })
      //สักครู่นะครับ
    } else {
      setShowAvatar({ avatar: null })
      setShowAvatar({ avatar: '' })
    }
  }

  const handleEdit = async (e) => {
    // if ()
    // const { avatar } = editAvatar
    console.log('editAvatar.avatar')
    console.log(editAvatar.avatar)
    if (editAvatar) {
      const myFormData = new FormData()
      myFormData.append('image', editAvatar.avatar)
      try {
        await axios.patch('/upload-avatar', myFormData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
      } catch (err) {
        console.log(err)
      }
    } else {
      console.log('pongtai')
    }
  }
  console.log('show', showAvatar)
  console.log('edit', editAvatar)
  const classes = useStyles()
  const [value, setValue] = React.useState(4)
  const [modalStyle] = React.useState(getModalStyle)
  return (
    <div style={modalStyle} className={classes.paper}>
      <Paper className={classes.paperCommenceModal}>
        <div>
          <h2 className={classes.CommenceHeaderModal}>Commerce Profile</h2>
        </div>
        <Divider className={classes.DividerModal} light />
        <input
          accept="image/*"
          style={{ display: 'none' }}
          // className={classes.inputPhoto}
          id="contained-button-file"
          multiple
          type="file"
          onChange={onChangeFilePhotos}
        />
        <label htmlFor="contained-button-file">
          <Avatar
            id="contained-butto-file"
            className={classes.AvatarCommenceModal}
            src={showAvatar?.avatar}
            alt={user?.firstName}
          />
        </label>
        <h1 className={classes.nameCommenceModal}>
          {user?.firstName} {user?.lastName}
        </h1>
        <div className={classes.FlexCenter}>
          <Button
            className={classes.buttonEdit}
            startIcon={<MdModeEdit />}
            onClick={handleEdit}
          >
            Edit Avatar
          </Button>
        </div>
        <br></br>
        <Divider className={classes.DividerModal} light />

        <Box component="fieldset" mb={3} borderColor="transparent">
          <Typography className={classes.RatingHead}>Seller Ratings</Typography>
          <Rating
            name="read-only"
            value={value}
            readOnly
            className={classes.RatingModal}
          />
          <Typography className={classes.RatingText}>Ratings: Good</Typography>
          <Typography className={classes.RatingsubText}>
            (Visit to the public after 0 ratings)
          </Typography>
        </Box>
        <Divider className={classes.DividerModal} light />
        {/* <Box component="fieldset" mb={3} borderColor="transparent">
          <Typography className={classes.RatingHead}>About</Typography>
          <div className={classes.FlexIcon}>
            <MdHome size="34" className={classes.IconHome} />
            <Typography className={classes.RatingText}>Live in</Typography>
            <Typography className={classes.TextHome}>Bangkok</Typography>
          </div>
        </Box> */}
        <Divider className={classes.DividerModal} light />
        <Box component="fieldset" borderColor="transparent">
          <Typography className={classes.TextHome}>
            MarketPlace Listings - {products.length}
          </Typography>
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'center',
              overflow: 'auto',
              height: '400px'
            }}
          >
            <div
              style={{
                width: '100%',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-evenly',
                alignItems: 'flex-start',
                color: 'white'
              }}
            >
              {products?.map((product) => (
                <div style={{ height: '100', width: '100' }}>
                  <ProductCard
                    product={product}
                    size="mini"
                    setOpen={setOpen}
                  />
                </div>
              ))}
            </div>
            <div>
              <Button variant="contained" className={classes.ButtonSeeMore}>
                See More
              </Button>
            </div>
          </div>
        </Box>
      </Paper>
    </div>
  )
}

export default CommenceProfileForm

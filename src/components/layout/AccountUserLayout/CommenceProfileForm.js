import { Box, Button, Grid } from '@material-ui/core'
import { Avatar, Divider, Paper, Typography } from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import React, { useContext, useEffect, useState } from 'react'

import { AuthContext } from '../../../context/AuthContextProvider'
import ProductCard from '../ProductCard'

import axios from '../../../config/axios'
import { useStyles } from './UseStyleAccountPage'

function CommenceProfileForm({ getModalStyle }) {
  const [products, setProducts] = useState([])
  const [open, setOpen] = useState(false)
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
  }, [])
  const { user } = useContext(AuthContext)
  const classes = useStyles()
  const [value, setValue] = React.useState(3)
  const [modalStyle] = React.useState(getModalStyle)
  return (
    <div style={modalStyle} className={classes.paper}>
      <Paper className={classes.paperCommenceModal}>
        <div>
          <h2 className={classes.CommenceHeaderModal}>Commerce Profile</h2>
        </div>
        <Divider className={classes.DividerModal} light />
        <Avatar
          className={classes.AvatarCommenceModal}
          alt="name"
          src="https://res.cloudinary.com/dux0yt3qn/image/upload/v1620211563/GroupProject/EZT-c_SUEAQVwX8_oxti1w.jpg"
        />
        <h1 className={classes.nameCommenceModal}>
          {user?.firstName} {user?.lastName}
        </h1>
        <div className={classes.FlexCenter}>
          <Button className={classes.buttonCommenceModal}>Edit</Button>
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
              <Button variant="contained">See More</Button>
            </div>
          </div>
        </Box>
      </Paper>
    </div>
  )
}

export default CommenceProfileForm

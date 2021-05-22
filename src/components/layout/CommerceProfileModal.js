import React, { useEffect, useState } from 'react'
import axios from '../../config/axios'
import {
  Modal,
  TextField,
  Avatar,
  Divider,
  Typography,
  Button,
  Box,
  Grid,
  Container
} from '@material-ui/core'
import RoomIcon from '@material-ui/icons/Room'
import HomeWorkIcon from '@material-ui/icons/HomeWork'
import HowToRegIcon from '@material-ui/icons/HowToReg'
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'
import ProductCard from './ProductCard'

import { useStyles, modalStyle } from './UseStyleCommerceProfileModal'

function CommerceProfileModal(props) {
  const [products, setProducts] = useState(null)
  const classes = useStyles()
  const { openPopup, setOpenPopup, seller } = props

  useEffect(() => {
    if (seller) {
  
      const fetchProducts = async () => {
        try {
          const res = await axios.get(`/product/get-user-products/${seller.id}`)
       
          setProducts(res.data.products)
        } catch (err) {
          console.log(`err`, err)
        }
      }
      fetchProducts()
    }
  }, [seller])

  return (
    <div className={classes.paper}>
      <Modal open={openPopup}>
        <Container style={modalStyle} className={classes.paper}>
          <Box>
            <Box className={classes.closeButton}>
              <Box variant="h6" component="h2" flexGrow={1}>
                Commerce Profile
              </Box>
              <Box>
                {' '}
                <IconButton
                  className={classes.button}
                  IconButton
                  onClick={() => setOpenPopup(false)}
                >
                  <CloseIcon />
                </IconButton>
              </Box>
            </Box>
          </Box>

          <Divider className={classes.dividerLine} />
          <Avatar className={classes.large} alt="name" src={seller?.avatar} />

          <Typography variant="h6" component="h2">
            {seller?.firstName} {seller?.lastName}
          </Typography>
          <Box className={classes.buttonList}>
            <Button variant="contained" size="small" className={classes.button}>
              Follow
            </Button>
            <Button
              variant="contained"
              size="small"
              className={classes.button}
              onClick={() => alert('Apply')}
            >
              View Profile
            </Button>
            <Button
              variant="contained"
              size="small"
              className={classes.button}
              onClick={() => alert('Apply')}
            >
              Report
            </Button>
          </Box>
          <Divider className={classes.dividerLine} />
          <Typography variant="body2" component="span">
            <RoomIcon /> From {seller?.location}
          </Typography>
          <Divider className={classes.dividerLine} />
          <Typography variant="body2" component="h6">
            About
          </Typography>

          <Typography variant="body2" component="span">
            <HowToRegIcon /> Joined MarketPlace in 2011
          </Typography>
          <Divider className={classes.dividerLine} />
          <Typography variant="body2" component="span">
            MarketPlace Listing
          </Typography>
          <div
            style={{
              width: '600px',
              display: 'flex',
              flexWrap: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center'
            }}
          >
            {products?.map((product) => (
              <div>
                <ProductCard product={product} size="mini" />
              </div>
            ))}
          </div>
        </Container>
      </Modal>
    </div>
  )
}
export default CommerceProfileModal

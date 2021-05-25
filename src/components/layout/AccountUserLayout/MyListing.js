import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
  Typography
} from '@material-ui/core'
import React, { useEffect } from 'react'
import { useStyles } from './UseStyleAccountPage'
import { AiFillFire } from 'react-icons/ai'
// import { RiShareForwardFill } from "react-icons/ri";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import axios from '../../../config/axios'

import { MdDelete, MdDone, MdEdit } from 'react-icons/md'
import { useHistory } from 'react-router-dom'
import Script from 'react-load-script'
let OmiseCard
let publicKey = 'pkey_test_5nn3im7ir2w0f8mtlr1'
function MyListing({ products, getProductId }) {
  const handleScriptLoad = () => {
    OmiseCard = window.OmiseCard
    OmiseCard.configure({
      publicKey,
      currency: 'USD',
      buttonLabel: 'Pay with Omise',
      frameLabel: 'Taladnud'
      // image:
      //   'https://res.cloudinary.com/risingnova/image/upload/v1618904155/pexels-ryan-baker-129574_zxev5m.jpg'
    })
  }
  const createConfigure = () => {
    OmiseCard.configure({
      otherPaymentMethod: []
    })
    OmiseCard.configureButton('#credit_card', {
      publicKey,

      submitLabel: 'Pay'
    })
    OmiseCard.attach()
  }
  const OmiseCardHandlerToken = () => {
    // ตัวส่ง bodyCard ไปหลังบ้าน
    // const { cart, createCreditCardCharge } = this.props
    OmiseCard.open({
      amount: 0,
      currency: 'USD',
      defaultPaymentMethod: 'credit_card',
      frameDescription: 'Invoice #3847',
      // onCreateTokenSuccess: (token) => {
      //   createCreditCardCharge(cart.email, cart.name, cart.amount, token)
      // },
      onFormClosed: () => {}
    })
  }

  const handleFormPayment = (e) => {
    // e.preventDefault()
    createConfigure()
    OmiseCardHandlerToken()
  }
  const classes = useStyles()
  // /get-user-products/:userId
  const history = useHistory()
  const [open, setOpen] = React.useState(false)
  // const [sold, setSold] = useState(false)
  useEffect(() => {
    setTimeout(() => getProductId(), 5000)
  }, [products])
  const handleButtonMark = async (id) => {
    // setSold((sold) => !sold)
    console.log(id)

    const res = await axios.patch('/product/sold/' + id)
    console.log(res.data)
  }
  const handleButtonMarked = async (id) => {
    // setSold((sold) => !sold)
    const res = await axios.patch('/product/available/' + id)
    console.log(res.data)
  }

  const handleClose = () => {
    setOpen(false)
  }
  const handleOpenDel = () => {
    setOpen(true)
  }
  const onDelete = async (id) => {
    try {
      const res = await axios.delete('/product/delete-product/' + id)
      if (res) {
        return setOpen(false)
      }
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <>
      <Box className={classes.contentListing}>
        {products?.map((product, idx) => {
          return (
            <Paper className={classes.paperListing} key={product.id}>
              <Box className={classes.contentInmyList}>
                <img
                  src={product?.Photos[0]?.post}
                  alt="list"
                  width="150px"
                  height="150px"
                  style={{ borderRadius: 6 }}
                  onClick={() => history.push('/select/product/' + product.id)}
                />
              </Box>
              <Box className={classes.contentInmyList}>
                <Typography className={classes.ListTitle}>
                  {product.title}
                </Typography>
                <Typography className={classes.ListPrice}>
                  {product.price}$
                </Typography>
                <Typography className={classes.ListStatus}>In stock</Typography>
                <Box className={classes.flexButtonInlist}>
                  {product?.productStatus === 'Available' ? (
                    <Button
                      className={classes.buttonMark}
                      startIcon={<MdDone />}
                      onClick={() => handleButtonMark(product.id)}
                    >
                      Mark As Sold
                    </Button>
                  ) : (
                    <Button
                      className={classes.buttonMarked}
                      startIcon={<PlayCircleFilledIcon />}
                      onClick={() => handleButtonMarked(product.id)}
                    >
                      Mark As Available
                    </Button>
                  )}
                  <div className="own-form">
                    <Script
                      url="https://cdn.omise.co/omise.js"
                      onLoad={handleScriptLoad}
                    />
                    <form id="checkoutForm" method="POST" action="/charge">
                      <Button
                        id="credit_card"
                        className={classes.buttonListing}
                        startIcon={<AiFillFire />}
                        onClick={handleFormPayment}
                      >
                        Boost Listing
                      </Button>
                    </form>
                  </div>

                  <Button
                    onClick={() => history.push('/editPage/' + product.id)}
                    className={classes.buttonShare}
                    startIcon={<MdEdit />}
                  >
                    Edit
                  </Button>
                  <Button
                    className={classes.buttonListingEdit}
                    startIcon={<MdDelete />}
                    onClick={() => handleOpenDel(product.id)}
                  >
                    Delete
                  </Button>
                </Box>
              </Box>
              <Dialog
                open={open}
                onClose={handleClose}
                // PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
              >
                <DialogTitle
                  style={{ cursor: 'move' }}
                  id="draggable-dialog-title"
                >
                  Do you want to Delete?
                </DialogTitle>
                <DialogContent>
                  {/* <DialogContentText></DialogContentText> */}
                </DialogContent>
                <DialogActions>
                  <Button
                    autoFocus
                    onClick={() => onDelete(product.id)}
                    color="primary"
                  >
                    Yes! Delete it.
                  </Button>
                  <Button onClick={handleClose} color="primary">
                    Cancel
                  </Button>
                </DialogActions>
              </Dialog>
            </Paper>
          )
        })}
      </Box>
    </>
  )
}

export default MyListing

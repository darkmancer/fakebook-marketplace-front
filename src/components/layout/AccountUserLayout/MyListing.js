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

import axios from '../../../config/axios'
import { useState } from 'react'
import { MdClose, MdDelete, MdDone, MdEdit } from 'react-icons/md'
import { useHistory } from 'react-router-dom'

function MyListing({ products, getProductId }) {
  const classes = useStyles()
  // /get-user-products/:userId
  const history = useHistory()
  const [open, setOpen] = React.useState(false)
  // const [sold, setSold] = useState(false)
  useEffect(() => {
    getProductId()
  }, [])
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
        window.location.reload()
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
                  {product.price} Baht
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
                      startIcon={<MdClose />}
                      onClick={() => handleButtonMarked(product.id)}
                    >
                      Mark As Available
                    </Button>
                  )}
                  <Button
                    className={classes.buttonListing}
                    startIcon={<AiFillFire />}
                  >
                    Boost Listing
                  </Button>

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

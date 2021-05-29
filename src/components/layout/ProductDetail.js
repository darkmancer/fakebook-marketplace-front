import React, { useState, useEffect } from 'react'
import axios from '../../config/axios'
import { useHistory } from 'react-router-dom'
import MessageIcon from '@material-ui/icons/Message'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import ShareIcon from '@material-ui/icons/Share'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import MessageBox from './Messenger/MessageBox'
import CommerceProfileModal from './CommerceProfileModal'
import { useStylesProductDetail } from './UseStyleProductDetail'
import NewCommerceProfileModal from './NewCommerceProfileModal'
import { makeStyles } from '@material-ui/core/styles'
import {
  AppBar,
  Toolbar,
  Avatar,
  Box,
  Typography,
  Button
} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1)
    }
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3)
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10)
  }
}))

function ProductDetail({ product, trigger, setTrigger, id }) {
  const [seller, setSeller] = useState(null)
  const classes = { ...useStylesProductDetail(), ...useStyles() }
  const [open, setOpen] = React.useState(false)
  const [triggerSave, setTriggerSaved] = useState(false)
  const [openChat, setOpenChat] = useState(false)
  const [openPopup, setOpenPopup] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  // const classes = useStylesProductDetail();
  const history = useHistory()

  useEffect(() => {
    const fetchSeller = async () => {
      try {
        const res = await axios.get(`/seller/${product.userId}`)
        // const res = await axios.get(`/seller/${id}`);

        setSeller(res.data.sellerProfile)
        setIsLoading(false)
      } catch (err) {
        console.log(`err`, err)
      }
    }
    const fetchIsSaved = async () => {
      const res = await axios.get(`/saved/isSaved/${product.id}`)
      setTriggerSaved(res.data.saved)
    }
    

    fetchSeller()
    fetchIsSaved()
  }, [product])
  const saveProduct = async () => {
    setTriggerSaved((prev) => !prev)
    const res = await axios.post(`/saved/createSaved/${product.id}`)
  }
  const unSaveProduct = async () => {
    setTriggerSaved((prev) => !prev)
    const res = await axios.delete(`/saved/deleteSaved/${product.id}`)
  }

  if (isLoading) return <p>loading</p>
  return (
    <>
      <div style={{ overflow: 'scroll' }}>
        <Drawer
          // className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <Toolbar />
          <div className={classes.closeButton}>
            <CloseIcon button onClick={() => history.push('/homepage')} />
          </div>
          <div className={classes.drawerContainer}>
            <List>
              <ListItem>
                <Typography variant="h4" component="h3">
                  {product?.title}
                </Typography>
              </ListItem>
            </List>
            <List>
              <ListItem>
                <Typography variant="h5" component="h3">
                  ${product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} · {product.productStatus}
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="h9" component="h9">
                  {product.category}
                  <NavigateNextIcon style={{ height: '12px' }} />
                  {product.subCategory}{' '}
                </Typography>
              </ListItem>
            </List>

            <Box className={classes.buttonList}>
              <Box flexGrow={1}>
                <Button
                  onClick={() => setOpenChat(true)}
                  fullWidth
                  variant="contained"
                  color="default"
                  className={classes.button}
                  startIcon={<MessageIcon />}
                >
                  Message
                </Button>
              </Box>
              <Box>
                {triggerSave ? (
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.buttonSave}
                    startIcon={<BookmarkIcon />}
                    onClick={unSaveProduct}
                  >
                    save
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="default"
                    className={classes.buttonSave}
                    startIcon={<BookmarkIcon />}
                    onClick={saveProduct}
                  >
                    save
                  </Button>
                )}
              </Box>

              <Box>
                <Button
                  variant="contained"
                  color="default"
                  className={classes.button}
                  startIcon={<ShareIcon />}
                >
                  share
                </Button>
              </Box>
            </Box>
            <Divider className={classes.dividerLine} />
            <List>
              <Typography variant="h6" component="h1">
                <ListItem>Details</ListItem>
              </Typography>
              <ListItem>
                <Typography variant="h9" component="h9">
                  Condition: {product.condition}
                </Typography>
              </ListItem>
              <Typography variant="h9" component="h9">
                <ListItem>{product.description}</ListItem>
              </Typography>
            </List>
            <Divider className={classes.dividerLine} />
            <List>
              <Typography
                variant="h5"
                component="h2"
                style={{ fontWeight: '600' }}
              >
                <ListItem>Seller Information</ListItem>
              </Typography>
              <NewCommerceProfileModal
                open={open}
                setOpen={setOpen}
                setTrigger={setTrigger}
                trigger={trigger}
                seller={seller}
              />
            </List>
          </div>
        </Drawer>
      </div>

      <CommerceProfileModal openPopup={openPopup} setOpenPopup={setOpenPopup} />

      <MessageBox
        seller={seller}
        openChat={openChat}
        setOpenChat={setOpenChat}
        productId={id}
      />
    </>
  )
}
export default ProductDetail

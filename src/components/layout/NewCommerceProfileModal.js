import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import { useSpring, animated } from 'react-spring/web.cjs' // web.cjs is required for IE 11 support
import {
  Typography,
  Container,
  Avatar,
  Button,
  Divider,
  Box
} from '@material-ui/core'
import axios from '../../config/axios'
import RoomIcon from '@material-ui/icons/Room'
import HomeWorkIcon from '@material-ui/icons/HomeWork'
import HowToRegIcon from '@material-ui/icons/HowToReg'
import ProductCard from './ProductCard'
import { Paper } from '@material-ui/core'
import { Rating } from '@material-ui/lab'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    backgroundColor: '#242526',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2),

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '350px',
    color: 'white',

    borderRadius: 5
  },
  BoxFlex: {
    width: '90%',
    margin: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  AvatarProfile: {
    width: theme.spacing(10),
    height: theme.spacing(10)
  },
  flexColCenter: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  ButtonSeeMore: {
    textTransform: 'none',
    margin: theme.spacing(2),
    color: 'white',
    backgroundColor: '#424242',
    '&:hover': {
      backgroundColor: '#616161'
    }
  },
  FlexButton: {
    display: 'flex',
    justifyContent: 'center'
  },
  button: {
    textTransform: 'none',
    '&:hover': {
      backgroundColor: 'grey'
    },
    margin: theme.spacing(1),
    backgroundColor: '#373A3B',
    color: 'white'
  },
  dividerLine: {
    backgroundColor: '#373A3B',
    width: '96%',
    margin: theme.spacing(1)
  },
  marketListing: {
    margin: theme.spacing(1, 0),
    fontSize: '1.2rem'
  },
  BoxHeader: {
    marginLeft: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center'
  },
  BoxText: {
    display: 'flex'
  },
  Icon: {
    margin: theme.spacing(1, 0.2)
  },
  Text: {
    margin: theme.spacing(1.5, 2, 1, 0.5)
  },
  RatingText: {
    color: '#616161'
  },
  NameText: {
    position: 'relative',
    right: 10
  }
}))

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter()
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited()
      }
    }
  })

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  )
})

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func
}

export default function SpringModal({
  open,
  setOpen,
  seller,
  trigger,
  setTrigger
}) {
  const [products, setProducts] = useState([])
  const [offset, setOffset] = useState(0)
  const [limit, setLimit] = useState(6)
  const classes = useStyles()
  const [triggerFollow, setTriggerFollow] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  const follow = async () => {
    setTriggerFollow((prev) => !prev)
    const res = await axios.post(`/follower/follow/${seller.id}`)
    console.log(res)
  }
  const unFollow = async () => {
    setTriggerFollow((prev) => !prev)
    const res = await axios.delete(`/follower/unfollow/${seller.id}`)
    console.log(res)
  }
  useEffect(() => {
    if (seller) {
      const fetchProducts = async () => {
        try {
          const res = await axios.get(
            `/product/get-limit-product-by-id/${seller.id}/${offset}/${limit}`
          )

          setLimit(3)
          setOffset(6)
          setProducts(res.data.products)
        } catch (err) {
          console.log(`err`, err)
        }
      }
      fetchProducts()
    }
  }, [seller])

  const seeMore = async () => {
    const res = await axios.get(
      `/product/get-limit-product-by-id/${seller.id}/${offset}/${limit}`
    )
    setProducts([...products, ...res.data.products])
    setOffset(limit + offset)
  }

  return (
    <div className={classes.contentCommenceProfile}>
      <Container onClick={() => setOpen(true)}>
        <Avatar alt="name" src={seller?.avatar} className={classes.large} />
        <div>
          <Typography variant="h6" component="h6">
            {seller?.firstName} {seller?.lastName} <br />
          </Typography>
          <Typography variant="caption" component="h8">
            Joined Marketplace in {seller?.joinYear.substring(0, 4)}
          </Typography>
        </div>
      </Container>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <Paper className={classes.paper}>
            <Typography
              variant="h5"
              component="h6"
              style={{ fontWeight: '500px' }}
            >
              Commerce Profile
            </Typography>
            <Box className={classes.BoxFlex}>
              <Box className={classes.BoxHeader}>
                <Box>
                  <Avatar
                    className={classes.AvatarProfile}
                    alt="name"
                    src={seller?.avatar}
                  />
                  <Typography
                    variant="h6"
                    component="h2"
                    className={classes.NameText}
                  >
                    {seller?.firstName} {seller?.lastName}
                  </Typography>
                </Box>
              </Box>
              <Box className={classes.FlexButton}>
                {triggerFollow ? (
                  <Button
                    variant="contained"
                    size="small"
                    className={classes.button}
                    onClick={unFollow}
                    color="primary"
                  >
                    Unfollow
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    size="small"
                    className={classes.button}
                    onClick={follow}
                    color="default"
                  >
                    Follow
                  </Button>
                )}

                <Button
                  variant="contained"
                  size="small"
                  className={classes.button}
                  onClick={() => alert('Apply')}
                >
                  Report
                </Button>
              </Box>
            </Box>
            <Divider className={classes.dividerLine} light />
            <Box component="fieldset" borderColor="transparent">
              <Typography variant="h6">Seller Ratings</Typography>
              <Rating name="read-only" value="4" readOnly />
              <Typography className={classes.RatingText}>
                Ratings: Good
              </Typography>
              <Typography className={classes.RatingText}>
                (Visit to the public after 0 ratings)
              </Typography>
            </Box>
            <Box component="fieldset" borderColor="transparent">
              <Typography variant="h6">About</Typography>
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start'
                }}
              >
                <Box className={classes.BoxText}>
                  <Typography component="span">
                    <RoomIcon /> Lives in {seller?.location}
                  </Typography>
                </Box>
                <Box className={classes.BoxText}>
                  <HowToRegIcon className={classes.Icon} />
                  <Typography className={classes.Text} component="span">
                    Joined MarketPlace in 2011
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Divider className={classes.dividerLine} light />

            <Typography
              className={classes.marketListing}
              variant="body2"
              component="span"
            >
              MarketPlace Listing
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
                  alignItems: 'flex-start'
                }}
              >
                {products?.map((product) => (
                  <div style={{ height: '100', width: '100' }}>
                    <ProductCard
                      product={product}
                      size="mini"
                      setOpen={setOpen}
                      setTrigger={setTrigger}
                      trigger={trigger}
                    />
                  </div>
                ))}
              </div>
              <div>
                <Button
                  variant="contained"
                  onClick={seeMore}
                  className={classes.ButtonSeeMore}
                >
                  See More
                </Button>
              </div>
            </div>
          </Paper>
        </Fade>
      </Modal>
    </div>
  )
}

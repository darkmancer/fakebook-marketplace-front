import { Avatar, Box, Button, Divider, Modal, Paper } from '@material-ui/core'
import React from 'react'
import { useContext } from 'react'
import { MdAdd } from 'react-icons/md'
import { useHistory } from 'react-router-dom'
import { AccountContext } from '../../../context/AccountContextProvider'
import CommenceProfileForm from './CommenceProfileForm'
import { useStyles } from './UseStyleAccountPage'
function CommeceProfile({ user, products }) {
  const classes = useStyles()
  const history = useHistory()

  const { setOpen, open } = useContext(AccountContext)

  function getModalStyle() {
    return {
      position: 'absolute',
      top: '10%',
      left: '35%',
      overflow: 'scroll',
      height: '100%',
      display: 'block'
    }
  }
  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <>
      <Box className={classes.contentCommenceProfile}>
        <Paper className={classes.paperCommence}>
          <div>
            <h4 style={{ color: 'white', margin: 8 }}>Your Commerce Profile</h4>

            <div className={classes.FlexAvatar}>
              <Avatar
                style={{ marginRight: 10 }}
                className={classes.AvatarCommence}
                alt="name"
                src={user?.avatar}
              />
              <div>
                <h4 className={classes.NameAvatar}>{user?.firstName}</h4>
                <h5 className={classes.ActiveListings}>
                  {products.length} Active Listings
                </h5>
              </div>
            </div>
            <Button
              onClick={() => {
                history.push('/myListings')
              }}
              className={classes.buttonCreateNewListAvatar}
              style={{ width: '250px' }}
            >
              <MdAdd style={{ marginRight: '10px' }} />
              Create New Listing
            </Button>
            <Button className={classes.buttonProfile} onClick={handleOpen}>
              See Profile
            </Button>
          </div>
        </Paper>
      </Box>
      {/* modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="title"
        aria-describedby="description"
      >
        <CommenceProfileForm
          getModalStyle={getModalStyle}
          user={user}
          products={products}
        />
      </Modal>
    </>
  )
}

export default CommeceProfile

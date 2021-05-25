import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Paper,
  Typography
} from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { MdDelete } from 'react-icons/md'
import { useStyles } from './UseStyleAccountPage'
import axios from '../../../config/axios'
import SpringModal from '../NewCommerceProfileModal'

function FollowerCommence() {
  const classes = useStyles()
  const [editMode, setEditMode] = useState(false)
  const [follower, setFollower] = useState()
  // const [seller, setSeller] = useState(null)
  const [open, setOpen] = React.useState(false)

  // const fetchSeller = async () => {
  //   try {
  //     const res = await axios.get(`/seller/` + )

  //     setSeller(res.data)
  //   } catch (err) {
  //     console.log(`err`, err)
  //   }
  // }

  const getFollowing = async () => {
    const res = await axios.get('/follower/get-following')
    console.log('res', res.data.userFollowed)
    setFollower(res.data.userFollowed)
  }
  const handleDelFollower = async (id) => {
    try {
      console.log(id)
      await axios.delete('/follower/unfollow/' + id)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getFollowing()
    // fetchSeller()
  }, [])
  // console.log(seller)
  console.log(follower)
  return (
    <Box className={classes.contentHaveListing}>
      <Paper className={classes.paperFollowing}>
        <Box className={classes.flexHeaderFollwering}>
          <div>
            <Typography className={classes.textHeaderFollowing}>
              Your Following
            </Typography>
          </div>
          {/* <div>
            <Typography
              onClick={() => setEditMode((prev) => !prev)}
              className={classes.editMode}
            >
              {editMode ? 'Done' : 'Edit'}
            </Typography>
          </div> */}
        </Box>
        {follower?.map((seller, idx) => {
          return (
            <Paper className={classes.paperContentFollowing} elevation={0}>
              <Box className={classes.flexSpace}>
                <SpringModal open={open} setOpen={setOpen} seller={seller} />
                {editMode ? (
                  <IconButton
                    className={classes.IconDel}
                    onClick={() => handleDelFollower(follower.followerId)}
                  >
                    <MdDelete />
                  </IconButton>
                ) : null}
              </Box>
            </Paper>
          )
        })}
      </Paper>
    </Box>
  )
}

export default FollowerCommence

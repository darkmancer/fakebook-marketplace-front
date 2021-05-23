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

function FollowerCommence() {
  const classes = useStyles()
  const [editMode, setEditMode] = useState(false)
  const [follower, setFollower] = useState()
  const getFollower = async () => {
    const res = await axios.get('/follower/get-followers')
    setFollower(res.data.followersRow)
  }
  const handleDelFollower = async (id) => {
    try {
      console.log(id)
      await axios.delete('/follower/unfollow/' + id)
    } catch (err) {}
  }
  useEffect(() => {
    getFollower()
  }, [])
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
          <div>
            <Typography
              onClick={() => setEditMode((prev) => !prev)}
              className={classes.editMode}
            >
              {editMode ? 'Done' : 'Edit'}
            </Typography>
          </div>
        </Box>
        {follower?.map((follower, idx) => {
          return (
            <Paper
              className={classes.paperContentFollowing}
              elevation={0}
              key={idx}
            >
              <Box className={classes.flexSpace}>
                <Box style={{ display: 'flex' }}>
                  <Avatar
                    alt={follower?.User?.firstName}
                    src={follower?.User?.avatar}
                    className={classes.avatar}
                  />
                  <Typography className={classes.Namefollowing}>
                    {follower?.User?.firstName} {follower?.User?.lastName}
                  </Typography>
                  <Typography className={classes.ListingPostingText}>
                    {follower?.User?.Products.length} : Listings
                  </Typography>
                </Box>
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

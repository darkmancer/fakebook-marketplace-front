import React, { useEffect, useState, useContext } from 'react'
import { Typography, Box, Button, Avatar } from '@material-ui/core'
import axios from '../../../../config/axios'
import { PayloadContext } from '../../../../context/PayloadContextProvider'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import MessageIcon from '@material-ui/icons/Message'
import { Image } from '@material-ui/icons'
import { useStyles } from './StylesInboxContent'
import LensIcon from '@material-ui/icons/Lens'
function SellItem({
  talksUser,
  setOpenPopup,
  setOpenChat,
  seller,
  user,
  productSelling
}) {
  const classes = useStyles()
  console.log('productSelling', productSelling)
  // const arr = productSelling.map((i, index) =>
  //   i.senderId !== i.Product.userId
  //     ? i
  //     : null || i.receiverId !== i.Product.userId
  //     ? i
  //     : null
  // )
  // console.log('arr', arr)

  return (
    <>
      {productSelling.map((i, index) => (
        <>
          <Box className={classes.paperSelling}>
            <Box className={classes.title}>
              <Avatar
                variant="square"
                alt="selling-pic"
                src={`${i.Product.Photos.post}`}
              />
              {i.Receiver.id !== i.Product.userId ? (
                <Typography className={classes.text} variant="body1">
                  {i.Receiver.firstName}
                </Typography>
              ) : null}
              {i.Sender.id !== i.Product.userId ? (
                <Typography className={classes.text} variant="body1">
                  {i.Sender.firstName}
                </Typography>
              ) : null}
              <LensIcon
                fontSize="small"
                style={{ color: 'white', margin: '8px' }}
              />
              <Typography className={classes.text} variant="body1">
                {i.Product.title}
              </Typography>
            </Box>
            <Box>
              <Button
                style={{ color: 'grey' }}
                button
                onClick={() => setOpenChat(true)}
              >
                <MessageIcon />
              </Button>
              <Button
                style={{ color: 'grey' }}
                button
                onClick={() => setOpenPopup(true)}
              >
                <MoreHorizIcon />
              </Button>
            </Box>
          </Box>
        </>
      ))}
    </>
  )
}
export default SellItem

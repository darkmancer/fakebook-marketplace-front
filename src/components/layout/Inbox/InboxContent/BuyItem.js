import React, { useEffect, useState, useContext } from 'react'
import { Typography, Box, Button, Avatar } from '@material-ui/core'
import axios from '../../../../config/axios'
import { PayloadContext } from '../../../../context/PayloadContextProvider'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import MessageIcon from '@material-ui/icons/Message'
import { Image } from '@material-ui/icons'
import { useStyles } from './StylesInboxContent'
import LensIcon from '@material-ui/icons/Lens'
function BuyItem({
  talksUser,
  setOpenPopup,
  setOpenChat,
  seller,
  user,
  productBuying
}) {
  const classes = useStyles()
  return (
    <>
      {productBuying.map((i, index) => (
        <>
          <Box className={classes.paperSelling}>
            <Box className={classes.title}>
              <Avatar
                variant="square"
                alt="buy-pic"
                style={{ width: '100px', height: '100px' }}
                src={i.Product?.Photos[0]?.post}
              />
              {i.Receiver.id === i.Product.userId ? (
                <Typography className={classes.text} variant="body1">
                  {i.Receiver.firstName}
                </Typography>
              ) : null}
              {i.Sender.id === i.Product.userId ? (
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
                button
                style={{ color: 'grey' }}
                onClick={() => setOpenChat(true)}
              >
                <MessageIcon />
              </Button>
              <Button
                button
                style={{ color: 'grey' }}
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
export default BuyItem

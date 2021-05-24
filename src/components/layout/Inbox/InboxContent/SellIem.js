import React, { useEffect, useState, useContext } from 'react'
import { Typography, Box, Button, Avatar } from '@material-ui/core'
import axios from '../../../../config/axios'
import { PayloadContext } from '../../../../context/PayloadContextProvider'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import MessageIcon from '@material-ui/icons/Message'
import { Image } from '@material-ui/icons'
import { useStyles } from './StylesInboxContent'
import LensIcon from '@material-ui/icons/Lens'
import { AuthContext } from '../../../../context/AuthContextProvider'
import { MessageIncProductContext } from '../../../../context/MessageIncProductProvider'

function SellItem({
  talksUser,
  setOpenPopup,
  setOpenChatSell,
  seller,

  productSelling
}) {
  const classes = useStyles()
  const [receiverId, setReceiverId] = useState('')
  const { user } = useContext(AuthContext)
  const {
    messages,
    setMessages,
    setNewReceiverIdForSell,
    setNewProductIdForSell
  } = useContext(MessageIncProductContext)
  // console.log('receiverId', receiverId)
  // console.log('productSelling', productSelling)

  const onHandleClick = async (i) => {
    let newId =
      i.receiverId !== user?.id
        ? i.receiverId
        : null || i.senderId !== user?.id
        ? i.senderId
        : null
    setNewReceiverIdForSell(newId)
    setNewProductIdForSell(i.productId)

    console.log('newIdSell', newId)
    console.log('productSell', i.productId)

    try {
      const res = await axios.get(
        `/message/getMessageIncProduct/${newId}/${i.productId}`
      )
      setMessages(res.data.messages)
      setOpenChatSell(true)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      {productSelling.map((i, index) => (
        <>
          <Box button className={classes.paperSelling} key={index}>
            <Box className={classes.title}>
              <Avatar
                variant="square"
                style={{ width: '100px', height: '100px' }}
                alt="selling-pic"
                src={i.Product?.Photos[0]?.post}
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
                button
                style={{ color: 'grey' }}
                onClick={() => onHandleClick(i)}
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

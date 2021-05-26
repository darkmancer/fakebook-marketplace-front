import React, { useState, useContext, useEffect, useRef } from 'react'
import * as localStorage from '../../../services/localStorageService'
import { SocketContext } from '../../../context/SocketContextProvider'
import { AuthContext } from '../../../context/AuthContextProvider'
import {
  Box,
  TextField,
  Typography,
  Button,
  Avatar,
  Divider,
  Paper,
  Modal,
  Slide
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Messages from './Messages'
import SendIcon from '@material-ui/icons/Send'
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'
import axios from '../../../config/axios'
import { MessageIncProductContext } from '../../../context/MessageIncProductProvider'
import MessagesBetweenUserSell from './MessagesBetweenUserSell'

const modalStyle = {
  top: `40%`,
  right: `5%`
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#242526',
    color: 'white'
  },
  paper: {
    zIndex: theme.zIndex.drawer + 1,
    position: 'absolute',
    width: 400,
    // minHeight: 500,
    backgroundColor: '#242526',
    color: 'white',
    display: 'flex',
    flexDirection: 'column'
    // alignItems: "center",
  },
  chatHeader: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  chatFooter: {
    display: 'flex'
  },
  dividerColor: {
    color: 'white'
  },
  searchInput: {
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    minHeight: '3ch',
    backgroundColor: '#3A3B3C',
    borderRadius: 20,
    color: '#DCDCDC'
  }
}))

//ฝั่งbuy
function MessageBoxBetweenUserSell(props) {
  const classes = useStyles()
  const [newMessage, setNewMessage] = useState('')
  const { openChatSell, setOpenChatSell } = props
  const { socket } = useContext(SocketContext)
  const { user } = useContext(AuthContext)
  const [seller, setSeller] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [chatUser, setChatUser] = useState([])
  const {
    messages,
    setMessages,
    newReceiverIdForSell,
    newReceiverIdForBuy,
    newProductIdForBuy,
    newProductIdForSell
  } = useContext(MessageIncProductContext)

  console.log('newReceiverIdSell', newReceiverIdForSell)
  console.log('newReceiverIdBuy', newReceiverIdForBuy)
  console.log('newproductSell', newProductIdForSell)
  console.log('newproductBuy', newProductIdForBuy)
  console.log('messages', messages.productId)
  //id ที่รับเข้ามาคือ id.param ของ product
  console.log('seller', seller)
  console.log(user)

  const fetchSellerByProductId = async () => {
    try {
      const res = await axios.get(`/profile/${newReceiverIdForSell}`)
      //console.log('res-seller-productId', res.data.product.User)
      console.log('data', res.data.sellerProfile)
      setSeller(res.data.sellerProfile)

      setIsLoading(false)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchSellerByProductId()
  }, [])

  const handleSendTexts = async (e) => {
    e.preventDefault()
    socket.emit('join_productId', newProductIdForSell)

    socket.emit('sendMessage', {
      text: newMessage,
      productId: newProductIdForSell,
      senderId: user.id,
      receiverId: newReceiverIdForSell
    })
    try {
      const res = await axios.post(`/message/${newReceiverIdForSell}`, {
        text: newMessage,
        productId: newProductIdForSell
      })
      console.log('res', res)
      setNewMessage('')
    } catch (err) {
      console.log(err)
    }
  }

  const body = (
    <Paper square={false} className={classes.paper} style={modalStyle}>
      <Box className={classes.chatHeader}>
        <Avatar
          alt="receiver-profile"
          style={{ margin: '10px' }}
          src={seller?.avatar}
        />
        <Typography style={{ margin: '15px' }}>
          {seller?.firstName} {seller?.lastName}
        </Typography>
        <Button color="primary">
          <CloseIcon onClick={() => setOpenChatSell(false)} />
        </Button>
      </Box>

      <Divider className={classes.dividerColor} />

      <MessagesBetweenUserSell
        receiverId={seller?.id}
        seller={seller}
        productId={newProductIdForSell}
      />

      <Box className={classes.chatFooter}>
        <TextField
          style={{ overflow: 'hidden' }}
          fullWidth
          margin="normal"
          multiline
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSendTexts(e)
          }}
          value={newMessage}
          InputProps={{
            className: classes.searchInput
          }}
        />
        <Button onClick={handleSendTexts} color="primary">
          <SendIcon />
        </Button>
      </Box>
    </Paper>
  )

  return <Modal open={openChatSell}>{body}</Modal>
}

export default MessageBoxBetweenUserSell

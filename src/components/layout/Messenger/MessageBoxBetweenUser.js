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
import MessagesBetweenUser from './MessagesBetweenUser'
import { MessageIncProductContext } from '../../../context/MessageIncProductProvider'

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

function MessageBoxBetweenUser(props) {
  const classes = useStyles()
  const [newMessage, setNewMessage] = useState('')
  const { openChat, setOpenChat, productId } = props
  const { socket } = useContext(SocketContext)
  const { user } = useContext(AuthContext)
  const [seller, setSeller] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [chatUser, setChatUser] = useState([])
  const { messages, setMessages } = useContext(MessageIncProductContext)

  //id ที่รับเข้ามาคือ id.param ของ product
  console.log('seller', seller)
  console.log(user)

  const fetchSellerByProductId = async () => {
    try {
      const res = await axios.get(`/product/get-seller-product/${productId}`)
      //console.log('res-seller-productId', res.data.product.User)
      setSeller(res.data.product?.User)
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
    socket.emit('join_productId', messages.productId)

    socket.emit('sendMessageFromBetweenUser', {
      text: newMessage,
      productId: messages.productId,
      senderId: user.id
    })
    try {
      const res = await axios.post(`/message/${user.id}`, {
        text: newMessage,
        productId: productId
      })
      console.log('res', res)
      setNewMessage('')
      //setText([...text, res.data.messages.text]);
    } catch (err) {
      console.log(err)
    }
  }

  const handleOnClose = () => {
    setOpenChat(false)
  }

  const body = (
    <Paper square={false} className={classes.paper} style={modalStyle}>
      <Box className={classes.chatHeader}>
        <Avatar alt="receiver-profile" style={{ margin: '10px' }} />
        <Typography style={{ margin: '15px' }}>
          {seller?.firstName} {seller?.lastName}
        </Typography>
        <Button color="primary">
          <CloseIcon onClick={handleOnClose} />
        </Button>
      </Box>

      <Divider className={classes.dividerColor} />

      <MessagesBetweenUser
        receiverId={seller?.id}
        seller={seller}
        productId={productId}
      />
      <Box className={classes.chatFooter}>
        <TextField
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
        <Button onClick={(e) => handleSendTexts(e)} color="primary">
          <SendIcon />
        </Button>
      </Box>
    </Paper>
  )

  return <Modal open={openChat}>{body}</Modal>
}

export default MessageBoxBetweenUser

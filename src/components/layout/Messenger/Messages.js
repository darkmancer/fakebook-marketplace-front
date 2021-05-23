import React, { useState, useEffect, useRef, useContext } from 'react'
import axios from '../../../config/axios'
import { socket, SocketContext } from '../../../context/SocketContextProvider'
import { Box, List, ListItem, ListItemText, Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import * as localStorage from '../../../services/localStorageService'
import { PayloadContext } from '../../../context/PayloadContextProvider'

const useStyles = makeStyles((theme) => ({
  text: {
    display: 'flex',
    width: 'fit-content'
  },
  textSender: {
    display: 'inline-block',
    textAlign: 'right',
    borderRadius: 5,
    padding: theme.spacing(1)
  },
  messageList: {
    overflow: 'auto',
    height: '300px'
  },
  colorBlue: {
    backgroundColor: '#1092F3',
    display: 'inline-block',
    width: 'fit-content',
    borderRadius: 10,
    padding: theme.spacing(1)
  },
  colorGrey: {
    backgroundColor: '#3A3B3C',
    borderRadius: 10,
    padding: theme.spacing(1)
  },
  avatarSeller: {
    display: 'flex'
  }
}))

function Messages({
  receiverId,
  seller,
  productId,
  productBuying,
  productSelling
}) {
  const scrollRef = useRef()
  const [texts, setTexts] = useState([])
  const [arriveMessages, setArriveMessages] = useState(null)
  const { payload, setPayload } = useContext(PayloadContext)
  const [sender, setSender] = useState([])
  const [receiver, setReceiver] = useState([])
  const [userTexts, setUserTexts] = useState([])

  // console.log('texts', texts)
  // console.log(receiverId)
  // console.log(arriveMessages)

  // console.log("sender", sender);
  // console.log("receiver", receiver);

  // console.log('arriveMessages', arriveMessages)

  const getMessages = async () => {
    try {
      const res = await axios.get(`message/getMessageByProductId/${productId}`)

      //console.log('data', res.data)
      setTexts(res.data.messages)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getMessages()
  }, [])

  // const getMessagesByUserId = async () => {
  //   try {
  //     const res = await axios.get(`message/getTalkAndProduct`)
  //     setUserTexts(res.data.arr)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }
  // useEffect(() => {
  //   getMessagesByUserId()
  // }, [])

  useEffect(() => {
    socket.on('getMessage', (data) => {
      setArriveMessages({
        receiverId: `${receiverId}`,
        text: data.text
      })
    })
  }, [])
  // console.log('userText', userTexts)
  // socket.on("hello", (data) => {
  //   io.emit("")
  //   setTest(data);
  // });

  useEffect(() => {
    arriveMessages && setTexts((prev) => [...prev, arriveMessages])
  }, [arriveMessages])

  // useEffect(() => {
  //   arriveMessages && setUserTexts((prev) => [...prev, arriveMessages])
  // }, [arriveMessages])

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [texts])

  const classes = useStyles()
  return (
    <Box>
      <List className={classes.messageList}>
        {texts.map((text, index) => (
          <ListItem
            ref={scrollRef}
            className={
              text.receiverId == receiverId ? classes.textSender : classes.text
            }
          >
            {text.receiverId == receiverId ? null : (
              <Avatar
                alt="receiver-profile"
                src={seller?.Avatar}
                style={{ display: 'inline' }}
                // className={classes.avatarSeller}
              />
            )}
            <ListItemText
              className={
                text.receiverId == receiverId
                  ? classes.colorBlue
                  : classes.colorGrey
              }
            >
              {/* <span>{text.text}</span> */}
              {text.text}
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default Messages

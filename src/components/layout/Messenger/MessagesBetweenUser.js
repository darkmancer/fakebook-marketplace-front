import React, { useState, useEffect, useRef, useContext } from 'react'
import axios from '../../../config/axios'
import { socket, SocketContext } from '../../../context/SocketContextProvider'
import { Box, List, ListItem, ListItemText, Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { AuthContext } from '../../../context/AuthContextProvider'
import { MessageIncProductContext } from '../../../context/MessageIncProductProvider'

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

function MessagesBetweenUser({ receiverId, seller }) {
  const scrollRef = useRef()
  const [texts, setTexts] = useState([])
  const [arriveMessages, setArriveMessages] = useState(null)
  const { user } = useContext(AuthContext)
  const { messages } = useContext(MessageIncProductContext)

  console.log(messages)

  useEffect(() => {
    socket.on('getMessage', (data) => {
      setArriveMessages({
        senderId: data.senderId,
        receiverId: data.receiverId,
        text: data.text
      })
    })
  }, [])

  useEffect(() => {
    arriveMessages && setTexts((prev) => [...prev, arriveMessages])
  }, [arriveMessages])

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [texts])

  console.log(texts)
  const classes = useStyles()
  return (
    <Box>
      <List className={classes.messageList}>
        {messages.map((text, index) => (
          <ListItem
            ref={scrollRef}
            className={
              text.senderId === user.id ? classes.textSender : classes.text
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
                text.senderId === user.id
                  ? classes.colorBlue
                  : classes.colorGrey
              }
            >
              {text.text}
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default MessagesBetweenUser

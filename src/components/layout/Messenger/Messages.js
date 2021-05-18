import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { socket, SocketContext } from "../../../context/SocketContextProvider";
import { Box, List, ListItem, ListItemText, Slide } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import * as localStorage from "../../../services/localStorageService";

const useStyles = makeStyles((theme) => ({
  text: {
    display: "flex",
    flexDirection: "column-reverse",
    alignItems: "flex-start",
  },
  textSender: {
    display: "flex",
    flexDirection: "column-reverse",

    maxWidth: "200",
    borderRadius: 5,
    alignItems: "flex-end",
    padding: theme.spacing(1),
  },
  messageList: {
    overflow: "auto",
    height: "300px",
  },
  colorBlue: {
    backgroundColor: "#1092F3",
    maxWidth: "200",
    borderRadius: 5,
    padding: theme.spacing(1),
  },
  colorGrey: {
    backgroundColor: "#3A3B3C",
    maxWidth: "200",
    borderRadius: 5,
    padding: theme.spacing(1),
  },
}));

function Messages({ own }) {
  const scrollRef = useRef();
  const [texts, setTexts] = useState([]);
  const [arriveMessages, setArriveMessages] = useState(null);

  const [sender, setSender] = useState([]);
  const [receiver, setReceiver] = useState([]);

  // console.log("sender", sender);
  // console.log("receiver", receiver);

  console.log("arriveMessages", arriveMessages);
  const receiverId = "16";

  const getMessages = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8001/message/" + receiverId,

        { headers: { authorization: `Bearer ${localStorage.getToken()}` } }
      );
      // console.log("message-res", res.data.messages.Receiver);

      setTexts(res.data.messages);
      // setSender(res.data.messages.Sender);
      // setReceiver(res.data.messages.Receiver);
      //getMessages();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMessages();
  }, []);

  useEffect(() => {
    socket.on("getMessage", (data) => {
      setArriveMessages({
        text: data.text,
      });
    });
  }, []);

  useEffect(() => {
    arriveMessages && setTexts((prev) => [...prev, arriveMessages]);
  }, [arriveMessages]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [texts]);

  const classes = useStyles();
  return (
    <Box>
      <List className={classes.messageList}>
        {texts.map((text, index) => (
          <ListItem
            ref={scrollRef}
            className={text.Sender ? classes.textSender : classes.text}
          >
            <ListItemText
              className={text.Sender ? classes.colorBlue : classes.colorGrey}
            >
              {text.text}
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default Messages;

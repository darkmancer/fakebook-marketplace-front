import React, { useState, useEffect } from "react";
import axios from "axios";
import { socket, SocketContext } from "../../../context/SocketContextProvider";
import { Box, List, ListItem, ListItemText } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import * as localStorage from "../../../services/localStorageService";
import useChat from "./_useChat";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  text: {
    backgroundColor: "blue",
    maxWidth: "200",
    borderRadius: 5,
    padding: theme.spacing(1),
  },
  messageList: {
    overflow: "auto",
  },
}));

function Messages({ own, messages }) {
  const [texts, setTexts] = useState([]);
  const receiverId = "16";

  const getMessages = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8001/message/" + receiverId,

        { headers: { authorization: `Bearer ${localStorage.getToken()}` } }
      );
      console.log(res);
      setTexts(res.data.messages);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMessages();
  }, []);

  // socket.emit("connected", texts);
  socket.emit("chat message", texts);

  socket.on("chat message", function (msg) {
    // var item = document.createElement("li");
    // item.textContent = msg;
    // messages.appendChild(item);
    // window.scrollTo(0, document.body.scrollHeight);
    //msg ออกมาเปนtexts [{}]
  });

  // useEffect(() => {
  //   socket.emit("newChatMessage", function (data) {
  //     getMessages();
  //   });
  // }, []);

  console.log("text", texts);
  //const [message, setMessage] = useState("");
  const classes = useStyles();
  return (
    <Box className={classes.messageList}>
      <List>
        <ListItem className={classes.root}>
          {texts.map((text, index) => (
            <ListItemText className={classes.text}>{text.text}</ListItemText>
          ))}
        </ListItem>
      </List>
    </Box>
  );
}

export default Messages;

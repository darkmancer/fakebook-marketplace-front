import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  TextField,
  Typography,
  CardActions,
  Button,
  Card,
  CardContent,
  Avatar,
  Divider,
  Paper,
  List,
  ListItem,
  ListSubheader,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
  //const receiverId = "16";
  const getMessages = async () => {
    try {
      const res = await axios.get("http://localhost:8001/message/", {
        receiverId: "16",
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMessages();
  }, []);

  console.log(messages);
  //const [message, setMessage] = useState("");
  const classes = useStyles();
  return (
    <Box className={classes.messageList}>
      <List>
        <ListItem className={classes.root}>
          {messages.map((message, index) => (
            <ListItemText className={classes.text}>{message}</ListItemText>
          ))}
        </ListItem>
      </List>
    </Box>
  );
}

export default Messages;
